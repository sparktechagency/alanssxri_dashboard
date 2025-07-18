import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from '../../../components/PagesComponents/Tiptap/MenuBar';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import { useEffect, useState } from 'react';
import { notification } from 'antd';
import { useGetDisclaimerQuery, useUpdateDisclaimerMutation } from '../../../redux/features/setting/settingApi';

// define your extension array
const extensions = [
    StarterKit.configure({
        bulletList: {
            HTMLAttributes: {
                class: 'list-disc ml-2'
            },
        },
    }),
    Highlight.configure({
        HTMLAttributes: {
            class: 'my-custom-class',
        },
    }),
    TextAlign.configure({
        types: ['heading', 'paragraph'],
    })

]


const Disclaimer = () => {
    const { data, refetch } = useGetDisclaimerQuery(undefined);
    const [api, contextHolder] = notification.useNotification();
    const [updateDisclaimer, { isLoading }] = useUpdateDisclaimerMutation();
    const [writtenContent, setWrittenContent] = useState<string>();

    const content = data?.data?.description;

    const editor = useEditor({
        extensions,
        content: content || '',
        editorProps: {
            attributes: {
                class: 'min-h-[400px] rounded-md bg-slate-50 py-2 px-3',
            }
        },
        onUpdate: ({ editor }) => {
            setWrittenContent(editor.getHTML());
        }
    }, [content]);

    useEffect(() => {
        if (content && editor && !editor.isDestroyed) {
            editor.commands.setContent(content);
        }
    }, [content, editor]);

    const saveChanges = () => {
        updateDisclaimer({ description: writtenContent }).unwrap()
            .then(() => {
                api.success({
                    message: 'Updated Successfully!',
                    description: 'Disclaimer',
                    placement: 'topRight',
                });
                refetch();
            })
            .catch((error) => {
                api.error({
                    message: error?.data?.message || 'Update failed',
                    description: 'Something went wrong!',
                    placement: 'topRight',
                });
            });
    };

    return (
        <div className='min-h-[100vh]'>
            {contextHolder}
            <div className=' flex justify-between items-center'>
                <h1 className="text-2xl mb-3">Disclaimer</h1>
                <MenuBar editor={editor} />
            </div>

            <EditorContent editor={editor} />
            <button
                type="submit"
                onClick={saveChanges}
                disabled={isLoading || !editor}
                className="bg-primary bg-primaryColor cursor-pointer mt-4 mb-16 text-white px-18 rounded-lg py-[6px] text-lg"
            >
                {isLoading ? "Loading..." : "Save & Changes"}
            </button>
        </div>
    );
};

export default Disclaimer;
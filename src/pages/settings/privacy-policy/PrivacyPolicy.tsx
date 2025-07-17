import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from '../../../components/PagesComponents/Tiptap/MenuBar';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import { useGetPrivacyPolicyQuery, useUpdatePrivacyPolicyMutation } from '../../../redux/features/setting/settingApi';
import { useEffect, useState } from 'react';
import { notification } from 'antd';

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
];

const PrivacyPolicy = () => {
    const { data, refetch } = useGetPrivacyPolicyQuery(undefined);
    const [api, contextHolder] = notification.useNotification();
    const [updatePrivacyPolicy, { isLoading }] = useUpdatePrivacyPolicyMutation();
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
        updatePrivacyPolicy({ description: writtenContent }).unwrap()
            .then(() => {
                api.success({
                    message: 'Updated Successfully!',
                    description: 'Privacy Policy',
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
            <div className='flex justify-between items-center'>
                <h1 className="text-2xl mb-3">Privacy Policy</h1>
                {editor && <MenuBar editor={editor} />}
            </div>

            {!editor ? (
                <p className="text-gray-500">Loading editor...</p>
            ) : (
                <EditorContent editor={editor} />
            )}

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

export default PrivacyPolicy;

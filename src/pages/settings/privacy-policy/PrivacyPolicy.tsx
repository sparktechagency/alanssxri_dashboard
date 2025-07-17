import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from '../../../components/PagesComponents/Tiptap/MenuBar';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import { useGetPrivacyPolicyQuery, useUpdatePrivacyPolicyMutation } from '../../../redux/features/setting/settingApi';
import { useEffect, useState } from 'react';
import { notification } from 'antd';

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


const PrivacyPolicy = () => {
    const { data } = useGetPrivacyPolicyQuery(undefined);
    const [api, contextHolder] = notification.useNotification();
    const [updatePrivacyPolicy, { isLoading }] = useUpdatePrivacyPolicyMutation();
    const [writtenContent, setWrittenContent] = useState<string>();

    useEffect(() => {
        setWrittenContent(data?.data?.description)
    }, [data?.data?.description])

    const content = data?.data?.description
    const editor = useEditor({
        extensions,
        content,
        editorProps: {
            attributes: {
                class: 'min-h-[400px] rounded-md bg-slate-50 py-2 px-3',
            }
        },
        onUpdate: ({ editor }) => {
            // const json = editor.getJSON()
            // console.log(editor.getHTML())
            setWrittenContent(editor.getHTML())
        }
    })

    const saveChanges = () => {
        updatePrivacyPolicy({ description: writtenContent }).unwrap()
            .then(() => {
                // console.log(data);
                api.success({
                    message: 'Updated Successfully!',
                    description: 'Privacy Policy',
                    placement: 'topRight',
                });
            })
            .catch((error) => {
                api.success({
                    message: error?.data?.message,
                    description: 'Something went wrong!',
                    placement: 'topRight',
                });
            })

    }
    return (
        <div className='min-h-[100vh]'>
            {contextHolder}
            <div className=' flex justify-between items-center'>
                <h1 className="text-2xl mb-3">Privacy Policy</h1>
                <MenuBar editor={editor} />
            </div>

            <EditorContent editor={editor} />
            <button
                type="submit"
                onClick={saveChanges}
                disabled={isLoading}
                className="bg-primary bg-primaryColor cursor-pointer  mt-4 mb-16 text-white px-18 rounded-lg py-[6px] text-lg"
            >
                {isLoading ? "Loading..." : "Save & Changes"}
            </button>
        </div>
    );
};

export default PrivacyPolicy;
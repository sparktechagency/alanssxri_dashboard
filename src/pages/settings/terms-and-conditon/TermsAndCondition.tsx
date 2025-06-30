import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import MenuBar from '../../../components/PagesComponents/Tiptap/MenuBar';

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

const content = ''

const TermsAndCondition = () => {
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
            console.log(editor.getHTML())
        }
    })
    return (
        <div className='min-h-[100vh]'>
            <div className=' flex justify-between items-center'>
                <h1 className="text-2xl mb-3">Terms And Condition</h1>
                <MenuBar editor={editor} />
            </div>

            <EditorContent editor={editor} />
        </div>
    );
};

export default TermsAndCondition;
import Quill from 'quill'
import { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'

const AddBlog = () => {
    const editorRef = useRef(null)
    const quillRef = useRef(null)

    const [image, setImage] = useState(false)
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [category, setCategory] = useState('Startup')
    const [isPublished, setIsPublished] = useState(false)

    const onSubmitHandler = async (e) => {
        e.preventDefault()
    }

    const generateContent = async () => {}
    useEffect(() => {
        if (!quillRef.current && editorRef.current) {
            quillRef.current = new Quill(editorRef.current, { theme: 'snow' })
        }
    }, [])
    return (
        <form className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll">
            <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
                <p>Upload thumbnail</p>
                <label htmlFor="image">
                    <img
                        src={!image ? assets.upload_area : URL.createObjectURL(image)}
                        alt="upload"
                        className="mt-2 h-16 rounded cursor-pointer"
                    />
                    <input
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file"
                        id="image"
                        hidden
                        required
                    />
                </label>

                <p className="mt-4">Blog Title</p>
                <input
                    type="text"
                    placeholder="type here..."
                    required
                    className="w-full max-w-lg mt-2 px-3 p-2 border border-gray-300 outline-none rounded"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <p className="mt-4">Subtitle</p>
                <input
                    type="text"
                    placeholder="type here..."
                    required
                    className="w-full max-w-lg mt-2 px-3 p-2 border border-gray-300 outline-none rounded"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                />

                <p className="mt-4">Blog description</p>
                <div className="max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative">
                    <div ref={editorRef} className="rounded"></div>
                    <button
                        type="button"
                        onClick={generateContent}
                        className="absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer"
                    >
                        Generate with AI
                    </button>
                </div>
                <label className="mt-4 mb-3 block">Blog Category</label>
                <div className="relative w-full max-w-sm">
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        name="category"
                        id="blog-category"
                        className="
            w-full appearance-none
            rounded border border-gray-300
            bg-white px-4 py-2.5 pr-10
            text-sm text-gray-700 outline-none cursor-pointer"
                    >
                        <option value="">Select category</option>
                        {blogCategories.map((category, index) => (
                            <option value={category} key={index}>
                                {category}
                            </option>
                        ))}
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </div>

                <div className="flex mt-4 gap-2">
                    <p>Publish Now</p>
                    <input
                        type="checkbox"
                        checked={isPublished}
                        className="scale-125 cursor-pointer"
                        onChange={(e) => setIsPublished(e.target.checked)}
                    />
                </div>
                <button className="mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm">
                    Add Blog
                </button>
            </div>
        </form>
    )
}

export default AddBlog

import { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import BlogCard from '../components/BlogCard'

const Blogs = () => {
    const [menu, setMenu] = useState('All')

    return (
        <div>
            <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
                {blogCategories.map((item) => (
                    <div key={item} className="relative">
                        <button
                            className={
                                menu === item
                                    ? `bg-primary rounded-full px-3 py-1 text-white text-sm transition-all duration-300`
                                    : `py-1 text-sm hover:text-primary transition-all duration-300`
                            }
                            onClick={() => {
                                setMenu(item)
                            }}
                        >
                            {item}
                        </button>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
                {blog_data
                    .filter((blog) => (menu === 'All' ? blog : blog.category === menu))
                    .map((blog) => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))}
            </div>
        </div>
    )
}

export default Blogs

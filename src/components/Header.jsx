import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className="mx-8 sm:mx-16 xl:mx-24 relative">
            <div className="text-center mt-20 mb-8">
                <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-6 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
                    <p>New: AI feature integrated</p>
                    <img src={assets.star_icon} alt="star_icon" className="w-2.5" />
                </div>

                <h1 className="text-4xl sm:text-7xl sm:leading-20 text-gray-800 cal-sans-regular">
                    Learning by <span className='text-primary cal-sans-regular'>building</span>
                </h1>
                <p className='my-6 sm:my-8 max-w-2xl m-auto text-sm  text-gray-500'>A tech journal documenting my learning journey in programming and computer science, sharing notes, experiments, and insights to help students and developers grow together.</p>

                <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
                    <input type="text" placeholder='Search for blogs' required className='w-full pl-4 outline-none'/>
                    <button type='submit' className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Search</button>
                </form>
            </div>

            <img
                src={assets.gradientBackground}
                alt="gradientBackground"
                className="absolute -top-50 -z-1 opacity-50"
            />
        </div>
    )
}

export default Header

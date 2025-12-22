import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full max-w-6xl flex px-7 justify-between items-center py-5 mx-auto">
            <h1
                className="font-bold text-2xl sm:text-3xl cursor-pointer"
                onClick={() => navigate('/')}
            >
                ranjitLogs
            </h1>
            <button
                className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-7 sm:px-10 py-2.5"
                onClick={() => navigate('/admin')}
            >
                Login
                <img src={assets.arrow} alt="arrow" className="w-3" />
            </button>
        </div>
    )
}

export default Navbar

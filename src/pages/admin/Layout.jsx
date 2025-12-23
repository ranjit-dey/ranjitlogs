import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import Sidebar from '../../components/admin/Sidebar'

const Layout = () => {
    const navigate = useNavigate()
    const logout = () => {
        navigate('/')
    }
    return (
        <>
            <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
                <h1
                    className="font-bold text-2xl sm:text-3xl cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    ranjitLogs
                </h1>
                <button
                    className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-7 sm:px-10 py-2.5"
                    onClick={logout}
                >
                    Logout
                    <img src={assets.arrow} alt="arrow" className="w-3" />
                </button>
            </div>

            <div className='flex h-[calc(100vh-70px)]'>
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}

export default Layout

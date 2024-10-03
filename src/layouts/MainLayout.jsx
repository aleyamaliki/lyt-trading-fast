import { Outlet } from 'react-router-dom'
import HomeHeader from '../components/Header/HomeHeader'
import BottomNavigation from '../components/BottomNavigation'

const MainLayout = () => {
    return (
        <div className="container md:max-w-md mx-auto text-black h-screen flex flex-col">
            <header className="flex-shrink-0">
                <HomeHeader />
            </header>
            
            <main className="flex-grow overflow-y-auto">
                <Outlet />
            </main>

            <footer className="flex-shrink-0">
                <div className="md:max-w-md mx-auto">
                <BottomNavigation />
                </div>
            </footer>
        </div>
    )
}

export default MainLayout
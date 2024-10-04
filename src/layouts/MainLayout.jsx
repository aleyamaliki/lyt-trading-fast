import { Outlet, useLocation } from 'react-router-dom'
import HomeHeader from '../components/Header/HomeHeader'
import BottomNavigation from '../components/BottomNavigation'
import ExchangeHeader from '../components/Header/ExchangeHeader';
import EarnHeader from '../components/Header/EarnHeader';

const MainLayout = () => {
    const location = useLocation();

    let headerComponent;
    switch (location.pathname) {
        case '/exchange':
            headerComponent = <ExchangeHeader />;
            break;
        case '/earn':
            headerComponent = <EarnHeader />;
            break;
        case '/wallet':
            headerComponent = <WalletHeader />;
            break;
        default:
            headerComponent = <HomeHeader />;
    }

    return (
        <div className="container md:max-w-md mx-auto text-white h-screen flex flex-col bg-menuDark">
            <header className="flex-shrink-0">
                {headerComponent}
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
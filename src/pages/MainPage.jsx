import NotificationPopup from "../components/Popup/NotificationPopup"
import data from '@data/cryptoData';
import MarketOne from '@components/Market/MarketOne'

const MainPage = () => {

    return (
        <div className="bg-backdrop min-h-screen text-white">
            {data.map((crypto, index) => <MarketOne key={index} crypto={crypto} />)}
        </div>
    )
}

export default MainPage
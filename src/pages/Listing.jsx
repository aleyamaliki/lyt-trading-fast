import NotificationPopup from "../components/Popup/NotificationPopup"
import data from '@data/cryptoData';
import MarketOne from '@components/Market/MarketOne'
import { IoSearch } from "react-icons/io5";
import { useBoundStore } from "../store";
import { useNavigate } from "react-router-dom";

const ListingPage = () => {

    const navigate = useNavigate()

    const onHandleClicked = (mint) => {
        navigate(`/token/${mint}`)
    }

    return (
        <div className="bg-backdrop min-h-screen text-white p-2">
            <div>
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Looking for crypto"
                        className="w-full bg-line text-secondary rounded-lg pl-10 py-2 focus:outline-none"
                    />
                    <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary text-2xl" />
                </div>
            </div>
            <div className="mt-2">
                {data.map((crypto, index) => <MarketOne key={index} crypto={crypto} onHandleClicked={() => onHandleClicked(1)} />)}
            </div>
        </div>
    )
}

export default ListingPage
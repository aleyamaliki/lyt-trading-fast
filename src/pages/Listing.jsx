import NotificationPopup from "../components/Popup/NotificationPopup"
import data from '@data/cryptoData';
import MarketOne from '@components/Market/MarketOne'
import { IoSearch } from "react-icons/io5";
import { useBoundStore } from "../store";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const ListingPage = () => {

    const navigate = useNavigate()

    const onHandleClicked = (mint) => {
        navigate(`/token/${mint}`)
    }

    const onSearch = () => {

    }

    return (
        <div className="bg-backdrop min-h-screen text-white">
            <SearchBar onSearch={onSearch} placeholder="Search" />
            <div className="">
                {data.map((crypto, index) => <MarketOne key={index} crypto={crypto} onHandleClicked={() => onHandleClicked(1)} />)}
            </div>
        </div>
    )
}

export default ListingPage
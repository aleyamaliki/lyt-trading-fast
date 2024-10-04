import { Line } from "react-chartjs-2"
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md';
import TextSubtitle from "../Typography/subtitle";
import PriceChange from "./PriceChange";

const MarketOne = ({ crypto, onHandleClicked }) => {
    return (
        <div className="flex items-center bg-menuDark p-3 cursor-pointer border-b-[1px] border-gray-900" onClick={onHandleClicked}>
            <img src={crypto.icon} alt={`${crypto.name} logo`} className="w-6 h-6 mr-4" />
            <div className="leading-none text-white">
                <div className="text-lg font-medium p-0 m-0">{crypto.name}</div>
                <TextSubtitle>$ {crypto.lastPrice}</TextSubtitle> <PriceChange change={crypto.change24h} />
            </div>
            <div className="">
                
            </div>
        </div>
    )
}

export default MarketOne
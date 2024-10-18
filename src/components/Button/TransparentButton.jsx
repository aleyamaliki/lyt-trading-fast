import solanaLogo from "@assets/solana_logo_noBg.png";

const TransparentButton = ({ children, ticker, onClick }) => {

    return (
        <button
            className="group flex justify-center gap-4 rounded-lg border border-gray-600 bg-gray-900 px-5 py-2 transition-colors hover:bg-transparent focus:outline-none focus:ring"
            onClick={onClick}
        >
            <span
                className="font-medium text-white transition-colors group-hover:text-gray-100 group-active:text-indigo-500 text-center text-md"
            >
                {children} <span className="text-xs uppercase">{ticker}</span>
            </span>
        </button>
    )
}

export default TransparentButton
import solanaLogo from "@assets/solana_logo_noBg.png";

const TransparentButton = ({ children, onClick }) => {

    return (
        <button
            className="group flex items-center justify-between gap-4 rounded-lg border border-gray-600 bg-gray-900 px-5 py-2 transition-colors hover:bg-transparent focus:outline-none focus:ring"
            onClick={onClick}
        >
            <img src={solanaLogo} className="h-8 w-8" />

            <span
                className="font-medium text-white transition-colors group-hover:text-gray-100 group-active:text-indigo-500 text-center text-sm"
            >
                {children}
            </span>
        </button>
    )
}

export default TransparentButton
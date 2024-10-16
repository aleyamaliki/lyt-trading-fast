const ButtonSecondary = ({ text, className, onClick }) => {
    return (
        <>
            <button className={`btn rounded-md px-12 py-3 bg-secondary ${className}`} onClick={onClick}>{text}</button>
        </>
    )
}

export default ButtonSecondary
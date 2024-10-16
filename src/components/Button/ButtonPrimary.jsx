const ButtonPrimary = ({ text, className, onClick }) => {
    return (
        <>
            <button className={`btn btn-primary rounded-md px-12 py-3 bg-primary ${className}`} onClick={onClick}>{text}</button>
        </>
    )
}

export default ButtonPrimary
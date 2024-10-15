const ButtonPrimary = ({ text, onClick }) => {
    return (
        <>
            <button className="btn btn-primary rounded-md px-12 py-3 bg-primary" onClick={onClick}>{text}</button>
        </>
    )
}

export default ButtonPrimary
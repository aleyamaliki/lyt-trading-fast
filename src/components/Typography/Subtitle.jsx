const TextSubtitle = ({children, className}) => {
    return  (
        <span className={`text-sm text-gray-400 ${className}`}>{children}</span>
    )
}

export default TextSubtitle
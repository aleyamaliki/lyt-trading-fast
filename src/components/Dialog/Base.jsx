import clsx from "clsx";
import { useEffect, useState } from "react";

const BaseDialog = ({
    title,
    isOpen,
    onClose,
    children,
    className
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleCloseClick = () => {
        if (onClose) {
            onClose();
        }
    };

    const handleBackdropClick = () => {
        if (onClose) {
            onClose();
        }
    };

    if (!isOpen && !isVisible) return null;

    return (
        <>
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-50" 
                    onClick={handleBackdropClick} 
                />
            )}

             <div className={clsx(
                `container md:max-w-md mx-auto bg-backdrop text-white fixed inset-x-0 bottom-0 transition-transform duration-300 z-[100] ${className}`,
                {
                    "translate-y-full": !isOpen,
                    "translate-y-0": isOpen
                }
            )}>
                <div className="w-full flex justify-between py-3 px-4 bg-gray-900">
                    <span className="text-medium uppercase font-bold text-white">{title}</span>
                    <button onClick={handleCloseClick} className="uppercase text-sm">CLOSE</button>
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </>
    )
}

export default BaseDialog
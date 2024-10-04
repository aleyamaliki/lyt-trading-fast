import clsx from "clsx";
import { useEffect, useState } from "react";

const BaseDialog = ({
    isOpen,
    onClose,
    children
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

    if (!isOpen && !isVisible) return null;

    return (
        <div className={clsx(
            "container md:max-w-md mx-auto bg-backdrop text-white p-2 min-h-screen fixed inset-x-0 bottom-0 transition-transform duration-300 z-[100]",
            {
                "translate-y-full": !isOpen,
                "translate-y-0": isOpen
            }
        )}>
            <button onClick={handleCloseClick}>X</button>
            <div>
                {children}
            </div>
        </div>
    )
}

export default BaseDialog
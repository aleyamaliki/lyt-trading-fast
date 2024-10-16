import React, { useRef, useState } from 'react';
import BaseDialog from './Base';
import { useBoundStore } from '../../store';
import TransparentButton from '../Button/TransparentButton';
import { IoSearch } from 'react-icons/io5';
import TextSubtitle from '../Typography/subtitle';
import TextH1 from '../Typography/h1';
import ButtonPrimary from '../Button/ButtonPrimary';
import ButtonSecondary from '../Button/ButtonNegative';
import DynamicInput from '../DynamicInput';

const SellDialog = ({ }) => {

    const { modal, setModalState } = useBoundStore()

    const [input, setInput] = useState(modal.sell.available)

    const onHandleClose = () => {
        setInput(0)
        setModalState({ sell: { isOpen: false, token: {}, available: 0 } });
    }

    const setSellPercent = (value) => {
        const final = input * value / 100
        setInput(final)
    }

    const onResetHandle = () => {
        setInput(modal.sell.available)
    }

    const handleChange = (e) => {
        const value = e.target.value
        if (/^\d*\.?\d*$/.test(value)) {
            setInput(value);
        }
    };

    const handleBlur = () => {
        if (input === '') {
          setInput(modal.sell.available);
        }
    };

    return (
        <BaseDialog title={"Sell"} isOpen={modal.sell.isOpen} onClose={onHandleClose} className={"h-full"}>
            <div className="h-screen">
                <div className="h-1/2 flex text-center items-center justify-center">
                   <div className="">
                        <DynamicInput
                            className="text-gray-200 text-center w-full bg-transparent border-none focus:outline-none p-0 m-0"
                            style={{ fontSize: '120px', lineHeight: '0', height: '120px' }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={input}
                        />
                        <span className="text-xl text-gray-500">SOL</span>

                        <div className="text-center py-5 text-yellow-200"><b>{modal.sell.available} {modal.sell.token.symbol}</b> available to sell</div>
                   </div>
                </div>
                
                <div className="py-5 px-2 text-center">
                    {input == modal.sell.available && (
                        <div className="grid grid-cols-3 grid-rows-2 gap-4">
                            <TransparentButton onClick={() => setSellPercent(25)}>25%</TransparentButton>
                            <TransparentButton onClick={() => setSellPercent(50)}>50%</TransparentButton>
                            <TransparentButton onClick={() => setSellPercent(100)}>100%</TransparentButton>
                        </div>
                    )}

                    {input != modal.sell.available && (
                        <div className="w-full flex flex-col gap-4 justify-center items-center">
                            <ButtonPrimary text={"Review"} onClick={onHandleClose} className="w-full" />
                            <ButtonSecondary text={"Reset"} onClick={onResetHandle} className="w-1/2" />
                        </div>
                    )}
                </div>
            </div>
            
        </BaseDialog>
    );
};

export default SellDialog;
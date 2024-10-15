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

const BuyDialog = ({ }) => {

    const { modal, setModalState } = useBoundStore()

    const [input, setInput] = useState(0)
    const inputRef = useRef(null)

    const onHandleClose = () => {
        setInput(0)
        setModalState({ buy: { isOpen: false, token: {} } });
    }

    const setBuyIn = (value) => {
        setInput(value)
    }

    const handleChange = (e) => {
        const value = e.target.value
        if (/^\d*\.?\d*$/.test(value)) {
            setInput(value);
        }
    };

    const handleBlur = () => {
        if (input === '') {
          setInput(0);
        }
    };

    const onResetHandle = () => {
        setInput(0)
    }

    return (
        <BaseDialog title={"Buy"} isOpen={modal.buy.isOpen} onClose={onHandleClose} className={"h-full"}>
            <div className="h-screen">
                <div className="h-1/2 flex text-center items-center justify-center">
                   <div className="">
                        <DynamicInput
                            className="text-gray-200 text-center w-full bg-transparent border-none focus:outline-none p-0 m-0"
                            style={{ fontSize: '120px', lineHeight: '0', height: '120px' }}
                            onChange={handleChange}
                            value={input}
                            onBlur={handleBlur}
                        />  
                        <span className="text-xl text-gray-500">SOL</span>

                        <div className="text-center py-5 text-yellow-200"><b>17 SOL</b> available to buy {modal.buy.token.symbol}</div>
                   </div>
                </div>
                
                <div className="py-5 px-2 text-center">
                    {input <= 0 && (
                        <div className="grid grid-cols-3 grid-rows-2 gap-4">
                            <TransparentButton onClick={() => setBuyIn(0.1)} ticker="sol">0.1</TransparentButton>
                            <TransparentButton onClick={() => setBuyIn(0.25)} ticker="sol">0.25</TransparentButton>
                            <TransparentButton onClick={() => setBuyIn(0.5)} ticker="sol">0.5</TransparentButton>
                            <TransparentButton onClick={() => setBuyIn(1)} ticker="sol">1</TransparentButton>
                            <TransparentButton onClick={() => setBuyIn(2)} ticker="sol">2</TransparentButton>
                            <TransparentButton onClick={() => setBuyIn(5)} ticker="sol">5</TransparentButton>
                        </div>
                    )}

                    {input > 0 && (
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

export default BuyDialog;
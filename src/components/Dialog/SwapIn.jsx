import React from 'react';
import BaseDialog from './Base';
import { useBoundStore } from '../../store';
import TransparentButton from '../Button/TransparentButton';
import { IoSearch } from 'react-icons/io5';

const SwapInDialog = ({ }) => {

    const { modal, setModalState } = useBoundStore()
    
    const onHandleClose = () => {
        setModalState({ swap: { isOpen: false } });
    }

    return (
        <BaseDialog title={"Buy BONK"} isOpen={modal.swap.isOpen} onClose={onHandleClose} className={"h-1/2"}>
            {/* <h2 className="text-lg font-bold">Swap Tokens</h2> */}
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
                <TransparentButton onClick={null}>0.05</TransparentButton>
                <TransparentButton onClick={null}>0.1</TransparentButton>
                <TransparentButton onClick={null}>0.2</TransparentButton>
                <TransparentButton onClick={null}>0.25</TransparentButton>
                <TransparentButton onClick={null}>0.5</TransparentButton>
                <TransparentButton onClick={null}>1</TransparentButton>
            </div>

            <div className="p-2 rounded-md bg-white/10 my-4">
                <div className="flex justify-between my-1"><span className="text-sm">Balance</span> <span>0.05 SOL</span></div>
                <div className="flex-grow">
                    <div className="relative w-full">
                        <input
                        type="text"
                        placeholder="Input value"
                        className="w-full bg-line text-secondary rounded-lg pl-10 py-2 focus:outline-none"
                        />
                    </div>
                </div>
            </div>
                
            <a
                class="mt-8 inline-block w-full text-center rounded-md bg-green-600 py-4 text-md font-bold text-white shadow-xl"
                href="#"
                >
                Buy BONK
            </a>
        </BaseDialog>
    );
};

export default SwapInDialog;
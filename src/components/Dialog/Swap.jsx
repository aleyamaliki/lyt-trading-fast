import React from 'react';
import BaseDialog from './Base';
import { useBoundStore } from '../../store';

const SwapDialog = ({ }) => {

    const { modal, setModalState } = useBoundStore()
    
    const onHandleClose = () => {
        setModalState({ swap: { isOpen: false } });
    }

    return (
        <BaseDialog isOpen={modal.swap.isOpen} onClose={onHandleClose}>
            <h2 className="text-lg font-bold">Swap Tokens</h2>
            <p className="mt-4">Enter the amount you want to swap.</p>
        </BaseDialog>
    );
};

export default SwapDialog;
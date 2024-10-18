import React from 'react'
import TextH3 from '../components/Typography/H3'
import TextSubtitle from '../components/Typography/subtitle'
import TextCaption from '../components/Typography/Caption'
import ButtonPrimary from '../components/Button/ButtonPrimary';
import TransparentButton from '../components/Button/TransparentButton';

const completes =[
    {
        amount: '0.025',
        received: '1000',
        price: '0.0004',
    }
];

const Complete = () => {
  return (
    <div className="flex flex-col justify-center px-10 py-28 h-full">
        <div className="border rounded-md p-4">
            <TextH3>BONK swap completed</TextH3>
            <TextSubtitle>Your swap to buy 0.025 SOL to BONK is complete</TextSubtitle>
                {completes.map((complete) =>(
                    <div className="py-4 px-2">
                        <div className="flex justify-between mb-2">
                            <span>Amount purchased</span>
                            <span>{complete.amount} SOL</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Token received (BONK)</span>
                            <span>{complete.received} BONK</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Price per token</span>
                            <span>{complete.price} SOL</span>
                        </div>
                    </div>
                ))}
                <div className='flex justify-center'>
                    <ButtonPrimary text={"Done"}/>
                </div>
        </div>
    </div>
  )
}

export default Complete
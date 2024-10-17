import React from 'react'
import TextH3 from '../components/Typography/H3'
import { MdContentCopy } from 'react-icons/md'
import TextCaption from '../components/Typography/Caption'
import ButtonPrimary from '../components/Button/ButtonPrimary'

const UserReferral = () => {
  return (
    <div className="px-4">
        <div className="border-2 rounded-md p-4">
            <span>My Referral code</span>
            <div className="flex justify-between">
                <TextH3>E45FF2</TextH3>
                <MdContentCopy className="text-2xl mr-2 cursor-pointer" />
            </div>
        </div>
        <div className="flex justify-around items-center py-10">
            <div className="text-center">
                <span>Invited Friends</span>
                <TextH3>3</TextH3>
            </div>
            <div className="text-center">
                <span>Lifetime LYT earned</span>
                <TextH3>33,301</TextH3>
            </div>
        </div>
        <div className="flex flex-col py-20">
            <span className="mb-4">Refer your friend and earn 50% of their fees.</span>
            <span>Rewards are updated automatically deposited to your wallet.</span>
        </div>
        <div className="absolute inset-x-0 bottom-20 flex justify-center">
            <ButtonPrimary text={"Share"} className={'px-40'}/>
        </div>
    </div>
  )
}

export default UserReferral
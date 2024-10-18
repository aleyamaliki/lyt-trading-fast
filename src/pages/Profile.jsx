import React from 'react'
import ButtonPrimary from '../components/Button/ButtonPrimary'
import TextCaption from '../components/Typography/Caption'
import TextH3 from '../components/Typography/H3'
import TextH2 from '../components/Typography/H2'
import { cryptoData } from '../dummyData/cryptoData';
import ListingPage from './Listing'
import CryptoList from '../components/Crypto/CryptoList'

const Profile = () => {
    const filteredData = cryptoData; 
  return (
    <div className="px-4">
        <div className="flex justify-between items-center pb-4">
            <span>3mda...doNH</span>
            <ButtonPrimary text={"Referral"} className={'px-4 py-1'} />
        </div>
        <div className="border-2 rounded-md px-4 pb-2 pt-1">
            <TextH3>Value</TextH3>
            <span className='pt-4 text-2xl'>$ 140,2030</span>
        </div>
        <div className="pt-4 pb-2">
            <TextH3>My Assets</TextH3>
        </div>
        <CryptoList cryptoData={filteredData}/>
    </div>
  )
}

export default Profile
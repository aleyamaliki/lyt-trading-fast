import React from 'react'
import CreateandSellWallet from '../components/Earn/CreateandSellWallet'
import EarnHeader from '../components/Header/EarnHeader'
import EarnCrypto from '../components/Crypto/EarnCrypto'
import SearchBar from '../components/SearchBar'

const Earn = () => {
  return (
    <div>
      <SearchBar />
      <CreateandSellWallet />
      <EarnCrypto />
    </div>
  )
}

export default Earn
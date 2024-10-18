import React from 'react'
import EarnHeader from '../components/Header/EarnHeader'
import EarnCrypto from '../components/Crypto/EarnCrypto'
import SearchBar from '../components/SearchBar'

const Earn = () => {
  return (
    <div>
      <SearchBar />
      <EarnCrypto />
    </div>
  )
}

export default Earn
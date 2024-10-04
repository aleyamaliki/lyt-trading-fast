import React from 'react'
import ExchangeHeader from '../components/Header/ExchangeHeader'
import SearchBar from '../components/SearchBar'
import TabBar from '../components/TabBar/TabBar'
import CryptoItem from '../components/Crypto/CryptoItem'

const Exchange = () => {
  return (
    <div>
        <SearchBar />
        <TabBar />
        <CryptoItem />
    </div>
  )
}

export default Exchange
import React from 'react'
import { BiSolidBook } from 'react-icons/bi'

const SetupWallet = () => {
  return (
    <div className="flex p-4 bg-menuDark rounded-3xl w-80">
      <div className="flex flex-col">
      <div className="bg-purple-900 bg-opacity-45 text-white w-12 h-12 flex items-center justify-center rounded-full mb-2">
          <BiSolidBook className="text-purple-300 text-2xl" />
        </div>
        <div>
          <h1 className="text-lg">Set up your wallet</h1>
          <p className="mt-1 text-secondary text-xs pr-4">
            Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fees.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SetupWallet

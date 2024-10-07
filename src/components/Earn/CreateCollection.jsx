import React from 'react'
import { FaWallet } from 'react-icons/fa'

const CreateCollection = () => {
  return (
    <div className="flex p-4 bg-menuDark rounded-3xl w-48">
      <div className="flex flex-col">
      <div className="bg-primary bg-opacity-15 text-white w-12 h-12 flex items-center justify-center rounded-full mb-2">
          <FaWallet className="text-primary text-2xl" />
        </div>
        <div>
          <h1 className="text-lg">Create Your Collection</h1>
          <p className="mt-1 text-secondary text-xs pr-4">
            Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fees.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CreateCollection

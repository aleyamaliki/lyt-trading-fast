import React from 'react'

const Step = ({ icon, title, description }) => {

  const iconWithClass = React.cloneElement(icon, {
    className: "text-purple-300 text-2xl",
  });

  return (
    <div className="flex p-4 bg-menuDark rounded-3xl w-80">
      <div className="flex flex-col">
      <div className="bg-purple-900 bg-opacity-45 text-white w-12 h-12 flex items-center justify-center rounded-full mb-2">
          {iconWithClass}
        </div>
        <div>
          <h1 className="text-lg">{title}</h1>
          <p className="mt-1 text-secondary text-xs pr-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Step

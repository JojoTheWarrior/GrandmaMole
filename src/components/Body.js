import React from 'react'

const gradientShadow = {
  boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.5)', // Adjust shadow properties as needed
  borderRadius: '8px', // Adjust as needed
};

export default function Body({text, title, jumpTo}) {
  return (
    <div className="p-4 m-10 bg-secondary" style={gradientShadow}>
      <div className="bg-secondary rounded-3xl">
        <h1 className="text-2xl font-heading">
            {title}
        </h1>
        <div className="text-lg font-body">
            <a id={jumpTo}>{text}</a>
        </div>
      </div>
    </div>
  )
}
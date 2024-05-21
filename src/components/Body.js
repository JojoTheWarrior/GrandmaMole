import React from 'react'

export default function Body({text, title, jumpTo}) {
  return (
    <div className="p-4 m-10 bg-secondary rounded-3xl">
        <h1 className="text-2xl font-heading">
            {title}
        </h1>
        <div className="text-lg font-body">
            <a id={jumpTo}>{text}</a>
        </div>
    </div>
  )
}
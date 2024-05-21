import React, { useState } from 'react'

export default function Checklist() {
    const [items, setItems] = useState([
        {id: 1, text: "221 g of butter", checked: false},
        {id: 2, text: "1 cup of white sugar", checked: false},
        {id: 3, text: "1 cup of brown sugar", checked: false},
        {id: 4, text: "2 large eggs", checked: false},
        {id: 5, text: "1 teaspoon of vanilla extract", checked: false},
        {id: 6, text: "2 cups of all-purpose flour", checked: false},
        {id: 7, text: "1 tsp of table salt", checked: false},
        {id: 8, text: "1 tsp of baking soda", checked: false},
        {id: 9, text: "1.5 tsp of cinnamon powder", checked: false},
        {id: 10, text: "3 cups of oat flakes", checked: false},
        {id: 11, text: (<p>1 cup of raisins or chocolate chips <b>(Optional)</b></p>), checked: false},
    ])

    const handleCheckboxChange = (itemId) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? {...item, checked: !item.checked } : item
            )
        )
    }
    
    return (
        <div>
            {items.map((item) => (
                <label className="flex items-center space-x-2">
                    <input type="checkbox" checked={item.checked} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={() => handleCheckboxChange(item.id)}/>
                    <span className={`${item.checked ? 'line-through' : ""}`}>{item.text}</span>
                </label>
            ))}
        </div>
    )
}

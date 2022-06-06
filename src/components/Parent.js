import React, { useState } from 'react'
import Child from './Child'
import './Parent.css'

export default function Parent() {

    const fruits = [
        '🍉', '🍌', '🫐'
    ]
    const [selectedFruitIndex, setSelectedFruitIndex] = useState(0)
    return (
        <div className="parent">
            <h3>Parent Component</h3>
            <div className="fruits">
                {fruits.map((f, i) => (
                    <div key={i}
                        className={`fruit ${selectedFruitIndex == i ? 'selected' : ''}`}
                        onClick={() => setSelectedFruitIndex(i)}>{f}</div>
                ))}
            </div>
            <p>{`<Child fruit={selectedFruit} />`}</p>
            <p>&#8681;</p>
            <Child fruit={fruits[selectedFruitIndex]} />
        </div>
    )
}

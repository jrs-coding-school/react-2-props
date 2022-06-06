import React from 'react'

export default function Child({ fruit }) {
    return (
        <div className="child">
            <h3>Child{'({ fruit })'}: {fruit}</h3>
        </div>
    )
}

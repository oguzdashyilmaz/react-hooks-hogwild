import React from 'react'

function HogList({ hogs }) {
    return (
        <div>
            {hogs.map(hog => (<HogCard key={hog.name} hog={hog} />))}
        </div>
    )
}

export default HogList;
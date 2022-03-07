import React from 'react';
import { useState } from 'react';
import HogDetails from './HogDetails';

function HogCard({hog}) {

    const [isHidden, setIsHidden] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    function handleDetailsClick(){
        setShowDetails(prevShowDetails => !prevShowDetails);
    }

    if (isHidden) return null;

    const {name, speciality, image} = hog;

  return (
    <div>
        <div className='image'>
            <img src={image} alt="hog picture" />
        </div>
        <div className="content">
            <h3 className="header">{name}</h3>
            <div className="description">Speciality: {speciality}</div>
        </div>
        <div className="extra content">
            {showDetails ? <HogDetails hog={hog} /> : null}
            <button className='ui button' onClick={handleDetailsClick}>
                {showDetails ? "Less info" : "More info"}
            </button>
            <button onClick={()=>setIsHidden(true)}>
                Hide me {" "}
            </button>
        </div>
    </div>
  )
}

export default HogCard;
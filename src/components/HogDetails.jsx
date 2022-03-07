import React from 'react'

function HogDetails({hog}) {

    const {greased, weight, "highest medal achieved": medal} = hog;

  return (
    <div>
        {greased ? "Greased" : "Not greased"}
        <p>
            highest medal achieved: {medal}
        </p>
        <p>
            Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator
            with Thru-the-Door Ice and Water: {weight}
        </p>
    </div>
  )
}

export default HogDetails;
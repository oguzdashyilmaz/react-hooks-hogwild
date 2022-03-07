import React from 'react'

function HogCard() {

    const [isHidden, setIsHidden] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    function handleDetailsClick(){
        setShowDetails(prevShowDetails => !prevShowDetails);
    }

    if (isHidden) return null;

    

  return (
    <div>HogCard</div>
  )
}

export default HogCard
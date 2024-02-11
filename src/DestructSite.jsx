import React, { useState } from 'react';

export default function DestructSite() {
    const [isHovered, setIsHovered] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    // Function to handle mouse over event
    const handleMouseOver = () => {
      setIsHovered(true);
    };
  
    // Function to handle mouse out event
    const handleMouseOut = () => {
      setIsHovered(false);
    };

    const handleClick = () => {
        setButtonClicked(true);
    };
    

    return (
        <>
            {buttonClicked || <a onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='destroy'>
                Destroy Website
                    {isHovered && <button onClick={handleClick} width="20" height="20" >Delete</button>}
            </a> }
        </>
    )
}

// {!buttonClicked && 
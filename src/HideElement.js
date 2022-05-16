import React from "react";

function HideElement() {
    const [hide, setHide] = React.useState(true);
  
    return (
      <>
        <button onClick={((e) => setHide(prev => !prev))}>Hide Element Below</button>
        {hide && <div>Toggle Challenge</div> }
        
      </>
    );
  }

  export default HideElement;
  
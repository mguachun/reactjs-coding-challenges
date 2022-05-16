import React from "react";

function HideElement() {
    const [] = React.useState(true);
  
    return (
      <>
        <button>Hide Element Below</button>
  
        <div>Toggle Challenge</div>
      </>
    );
  }

  export default HideElement;
  
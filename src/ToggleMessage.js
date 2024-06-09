import React, { useState } from 'react';
import './ToggleMessage.css';

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="ToggleMessage">
      <h2>Toggle Message</h2>
      {isVisible && <p>This is a toggle message!</p>}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>
    </div>
  );
}

export default ToggleMessage;

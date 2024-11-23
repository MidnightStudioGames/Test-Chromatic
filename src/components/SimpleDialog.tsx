import { useState } from 'react';


export const SimpleDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleClick}>Open Dialog</button>
      {isOpen && (
        <div style={{ border: '1px solid black', padding: '10px', marginTop: '10px' }}>
          <p>This is a simple dialog.</p>
          <button onClick={handleClick}>Close Dialog</button>
        </div>
      )}
    </div>
  );
}
import { useState } from 'react';
import './App.css';

export const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="toggle-container">
      <span style={{ marginRight: '15px' }}>ADMIN</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggleChange}
        />
        <span className="slider round"></span>
      </label>
      <p style={{ marginLeft: '15px' }}> {isChecked ? 'ON' : 'OFF'}</p>
    </div>
  );
};

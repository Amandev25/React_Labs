import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const toastRoot = document.getElementById('toast-root');

function Toast({ children, onClose }) {
  // This is the new part!
  // We use useEffect to run code after the component has been rendered.
  useEffect(() => {
    // Set a timer that will call the onClose function after 3000ms (3 seconds)
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    // This is a cleanup function.
    // If the component is removed before the timer finishes, we clear the timer.
    return () => {
      clearTimeout(timer);
    };
  }, [onClose]); // The effect depends on the onClose function

  return ReactDOM.createPortal(
    <div className="toast-container">
      {children}
    </div>,
    toastRoot
  );
}

export default Toast;
import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function EventSuccessPopUp() {
  const [open, setOpen] = useState(false);
  
  // Function to show the popup
  const showMessage = () => {
    setOpen(true);
  };
  
  // Function to handle closing
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  
  return (
    <div>
      {/* Button to trigger the popup */}
      <button onClick={showMessage}>Event Create successfully</button>
      
      {/* The popup component */}
      <Snackbar
        open={open}
        autoHideDuration={3000} // Will disappear after 3 seconds
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is your message!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default EventSuccessPopUp;
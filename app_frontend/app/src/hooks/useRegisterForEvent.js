import { useState } from "react";

export default function useRegisterForEvent() {
    const [error, setError] = useState(null);
  
    const registerForEvent = async (register_body) => {
        setError(null);
      try {
        const apiUrl = 'http://localhost:5001/api/user/registerEvent';
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(register_body),
          credentials: 'include',
        });
        
        console.log(JSON.stringify(register_body))
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to Register for event');
        return data.data || [];
      }
      
      catch (err) {
        console.error('Error in registering:', err);
        setError(err.message || 'An unknown error occurred');
        return [];
      }
    };
  
    return {error , registerForEvent};
  }
  
  
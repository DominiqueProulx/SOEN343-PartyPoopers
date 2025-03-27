import { useState } from "react";

// hooks/useEventFilter.js
export default function useRegister() {
    const [user, setUser] = useState();
    const [error, setError] = useState(null);
  
    const register = async (register_body) => {
        setError(null);
      
      try {
        const apiUrl = 'http://localhost:5000/api/user/register';
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(register_body)
        });
        
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to Register');
        
        setUser(data.data);
        console.log(data.data)
        return data.data || [];
      }
      
      catch (err) {
        console.error('Error in registering:', err);
        setError(err.message || 'An unknown error occurred');
        return [];
      }
    };
  
    return {user, error , register};
  }
  
  
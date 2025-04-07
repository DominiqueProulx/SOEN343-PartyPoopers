import { useState } from "react";

export default function useUserEvents() {
    const [user, setUser] = useState();
    const [error, setError] = useState(null);
  
    const getUserEvents = async () => {
        setError(null);
      
      try {
        const apiUrl = 'http://localhost:5001/api/user/getUserEvents';
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        }).then((response) => response.json()).then((data) =>console.log(data));

        if (!response.ok) throw new Error(data.error || 'Failed to getUserEvents'); 
      }
      
      catch (err) {
        console.error('Error in getUserEvents:', err);
        setError(err.message || 'An unknown error occurred');
        return [];
      }
    };
  
    return {user, error , getUserEvents};
  }
  
  
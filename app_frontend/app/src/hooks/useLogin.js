import { useState } from "react";

export default function useLogin() {
    const [user, setUser] = useState();
    const [error, setError] = useState(null);
  
    const login = async (register_body) => {
        setError(null);
      
      try {
        const apiUrl = 'http://localhost:5001/api/user/login';
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(register_body),
          credentials: 'include',
        }).then((response) => response.json()).then((data) =>console.log(data));

        if (!response.ok) throw new Error(data.error || 'Failed to login'); 
      }
      
      catch (err) {
        console.error('Error in login:', err);
        setError(err.message || 'An unknown error occurred');
        return [];
      }
    };
  
    return {user, error , login};
  }
  
  
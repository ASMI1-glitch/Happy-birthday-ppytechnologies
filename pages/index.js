import { useEffect, useState } from 'react';

export default function Home() {
  const [showCake, setShowCake] = useState(false);

  useEffect(() => {
    const isFirstLogin = localStorage.getItem('first_login');
    
    // Log the value of the 'first_login' key to the console
    console.log('first_login value:', isFirstLogin);

    if (!isFirstLogin) {
      setShowCake(true);
      localStorage.setItem('first_login', 'true');
      
      // Log that the 'first_login' key has been set
      console.log('first_login key has been set to: true');
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      {showCake ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">🎂 Happy Birthday! 🎉</h1>
          <img src="/cake.png" alt="Birthday Cake" className="w-64 h-64 mx-auto" />
          <p className="mt-4 text-lg">Wishing you lots of love and happiness! 🥳</p>
        </div>
      ) : (
        <h1 className="text-2xl font-semibold">Welcome Back!</h1>
      )}
    </div>
  );
}

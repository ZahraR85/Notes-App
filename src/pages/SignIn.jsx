import { useState } from 'react';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const hashedPassword = btoa(password); // Basic encoding for demonstration
    const user = users.find(
      u => u.username === username && u.password === hashedPassword
    );

    if (user) {
      alert('Sign in successful');
      localStorage.setItem('currentUser', JSON.stringify(user)); // Store logged-in user
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-start pt-20 min-h-screen bg-customBg">
    <div className="max-w-5xl w-2/5 p-8 bg-customBg1 shadow-lg rounded-lg space-y-5">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded"
      />
      <button onClick={handleSignIn} className="bg-customBgGreen text-white py-2 text-lg rounded w-full">Sign In</button>
    </div>
    </div>
  );
};

export default SignIn;

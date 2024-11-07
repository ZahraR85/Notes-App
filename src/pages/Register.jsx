import { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const hashedPassword = btoa(password); // Basic encoding for demonstration
    const newUser = { username, password: hashedPassword };

    if (users.some(u => u.username === username)) {
      alert('Username already exists');
    } else {
      localStorage.setItem('users', JSON.stringify([...users, newUser]));
      alert('Registration successful');
    }
  };

  return (
    <div className="flex justify-center items-start pt-20 min-h-screen bg-customBg">
    <div className="max-w-5xl w-2/5 p-8 bg-customBg1 shadow-lg rounded-lg space-y-5">
      <h2 className="text-2xl font-bold mb-4 text-center">Register/ Sign Up</h2>
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
      <button onClick={handleRegister} className="bg-customBgGreen text-white py-2 text-lg rounded w-full">Register</button>
    </div>
    </div>
  );
};

export default Register;

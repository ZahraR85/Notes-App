import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log('SignIn initiated'); // Debugging line
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const hashedPassword = btoa(password); // Encode password in base64
    const user = users.find(
      (u) => u.username === username && u.password === hashedPassword
    );

    if (user) {
      alert('Sign in successful');
      localStorage.setItem('currentUser', JSON.stringify(user));
      window.dispatchEvent(new Event('storage')); // Trigger storage event to update login status in App
      navigate('/');
    } else {
      alert('Invalid credentials');
      console.log('Invalid credentials:', username, password); // Debugging line
    }
  };

  return (
    <div className="flex justify-center items-start pt-20 min-h-screen bg-customBg">
      <div className="max-w-5xl w-2/5 p-8 bg-customBg1 shadow-lg rounded-lg space-y-5">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded"
        />
        <div className='w-full text-start underline hover:decoration-2'>
          <Link to="/register" className="btn btn-primary text-sm">Forgot your password?</Link>
        </div>
        <button
          onClick={handleSignIn}
          className="bg-customBgGreen text-white py-2 text-lg rounded w-full"
        > Sign In
        </button>
        <div className='m-5 w-full text-center underline hover:decoration-2'>
          <Link to="/register" className="btn btn-primary text-m">Create account / Register</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

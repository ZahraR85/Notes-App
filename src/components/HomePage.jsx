import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import Hero from './Hero'; 
const HomePage = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
    // Sort the entries by date (newest first)
    const sortedEntries = savedEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
    setEntries(sortedEntries);
  }, []);
  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this entry?');
    if (confirmed) {
      // Filter out the deleted entry
      const updatedEntries = entries.filter((entry) => entry.id !== id);
      // Sort the updated entries after deletion
      const sortedUpdatedEntries = updatedEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
      setEntries(sortedUpdatedEntries);
      localStorage.setItem('entries', JSON.stringify(sortedUpdatedEntries));
    }
  };
  return (
    <div className="bg-customBg">
    {/*<Hero />*/}
    <div className="container mx-auto p-4">
      <Link to="/add-entry">
        <button className="bg-green-800 text-white py-2 px-4 rounded">Add New Diary</button>
      </Link>
      <div className="grid grid-cols-5 gap-5 mt-6 ">
        {entries.map((entry) => (
          <div key={entry.id} className=" bg-customBg1 relative border w-64 h-90 rounded overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
            <button onClick={() => handleDelete(entry.id)}
              className="absolute bottom-1 right-1"
            ><i className="fa-solid fa-trash text-2xl"></i></button>
            <Link to={`/entry/${entry.id}`}>
              <img src={entry.imageUrl} alt={entry.title} className="w-full h-60 p-4"/>
              <div className="p-2">
                <h2 className="text-lg font-semibold p-2">{entry.title}</h2>
                <p className="text-gray-500 text-sm p-2">{entry.date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};
export default HomePage;

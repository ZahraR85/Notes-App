import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNewDiary = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !imageUrl || !content) {
      alert('Please fill in all fields before submitting');
      return;
    }
    const newEntry = {
      id: Date.now(),
      title,
      date,
      imageUrl,
      content,
    };
    const existingEntries = JSON.parse(localStorage.getItem('entries')) || [];
    const updatedEntries = [...existingEntries, newEntry];
    localStorage.setItem('entries', JSON.stringify(updatedEntries));
    navigate('/diary-list');
  };
  return (
    <div className="flex justify-center items-start pt-20 min-h-screen bg-customBg">
      <div className="max-w-5xl w-4/5 p-8 bg-customBg1 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Add New Diary</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="8"
            className="block w-full p-2 border border-gray-300 rounded"
          ></textarea>
          <button type="submit" className="bg-customBgGreen text-white py-2 text-lg rounded w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddNewDiary;

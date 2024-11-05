import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SingleDiaryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const entries = JSON.parse(localStorage.getItem('entries')) || [];
  const entryIndex = entries.findIndex((entry) => entry.id === parseInt(id));
  const entry = entries[entryIndex];

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(entry?.title || '');
  const [date, setDate] = useState(entry?.date || '');
  const [imageUrl, setImageUrl] = useState(entry?.imageUrl || '');
  const [content, setContent] = useState(entry?.content || '');

  if (!entry) {
    return <div>Entry not found!</div>;
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedEntry = { ...entry, title, date, imageUrl, content };
    const updatedEntries = [...entries];
    updatedEntries[entryIndex] = updatedEntry;
    localStorage.setItem('entries', JSON.stringify(updatedEntries));
    setIsEditing(false);
  };
  return (
    <div className="flex justify-center items-start pt-20 min-h-screen bg-customBg">
      <div className="container max-w-5xl w-4/5 p-8 bg-customBg1 shadow-lg rounded-lg">
        {isEditing ? (
          <>
            <h1 className="text-2xl font-bold mb-4 text-center">Edit Entry</h1>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input type="text" placeholder="Title" value={title}
                onChange={(e) => setTitle(e.target.value)} className="block w-full p-2 border border-gray-300 rounded"/>
              <input type="date" value={date}
                onChange={(e) => setDate(e.target.value)}className="block w-full p-2 border border-gray-300 rounded"/>
              <input type="text" placeholder="Image URL" value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)} className="block w-full p-2 border border-gray-300 rounded"/>
              <textarea placeholder="Content"value={content} onChange={(e) => setContent(e.target.value)}
                rows="8" className="block w-full p-2 border border-gray-300 rounded"></textarea>
              <button type="submit" className="bg-green-800 text-white py-2 text-lg rounded w-full">Update</button>
            </form>
          </>
        ) : (
          <div className="flex flex-row space-x-8">
          <div className="flex-none w-1/3">
            <img src={entry.imageUrl} alt={entry.title} className="w-full h-auto object-cover rounded-lg"/>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{entry.title}</h1>
            <p className="text-gray-500 text-lg mb-4">{entry.date}</p>
            <p className="mb-8">{entry.content}</p>
            <div className="flex space-x-4">
            <button className="bg-green-800 text-white py-2 px-12 text-lg rounded mt-10 mr-4"
              onClick={() => navigate('./DiaryList.jsx')}>Close</button>
            <button className="bg-green-800 text-white py-2 px-12 text-lg rounded mt-10"
              onClick={() => setIsEditing(true)}>Edit</button>
            </div>
          </div>
        </div>

        )}
      </div>
    </div>
  );
};
export default SingleDiaryDetail;
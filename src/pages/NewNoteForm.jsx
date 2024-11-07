import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';

const NewNoteForm = () => {
  const { addNote } = useContext(NotesContext); // Access addNote from context
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');

  // Set the default author to the signed-in user's username
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setAuthor(currentUser.username); // Automatically set the author
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !date || !imageUrl || !content) {
      alert('Please fill in all fields before submitting');
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      author,
      date,
      imageUrl,
      content,
    };

    addNote(newNote);
    navigate('/school-notes'); // Redirect after adding the note
  };

  return (
    <div className="flex justify-center items-start pt-20 min-h-screen bg-customBg">
      <div className="max-w-5xl w-4/5 p-8 bg-customBg1 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Note</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            value={author} // Author is read-only (signed-in user's username)
            readOnly
            className="block w-full p-2 border border-gray-300 rounded bg-gray-100"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
            rows="8"
            required
          ></textarea>
          <button type="submit" className="bg-customBgGreen text-white py-2 text-lg rounded w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewNoteForm;

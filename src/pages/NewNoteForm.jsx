// NewNoteForm.jsx
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';

const NewNoteForm = () => {
  const { addNote } = useContext(NotesContext); // Access addNote from context
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ title, content }); // Call addNote with title and content
    navigate('/school-notes'); // Redirect after adding the note
  };

  return (
    <div className="flex justify-center items-start pt-20 min-h-screen bg-customBg">
      <div className="max-w-5xl w-4/5 p-8 bg-customBg1 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Note</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-green-800 text-white py-2 text-lg rounded w-full">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewNoteForm;

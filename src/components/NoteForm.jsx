// NoteForm.jsx
import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';

const NoteForm = () => {
  const { noteId } = useParams(); // Retrieves the noteId from the URL
  const { notes, updateNote } = useContext(NotesContext);
  const navigate = useNavigate();

  // Find the note that matches noteId (for editing purposes)
  const existingNote = notes.find((n) => n.id === noteId);

  // Initialize state with existing note data if available
  const [title, setTitle] = useState(existingNote ? existingNote.title : '');
  const [author, setAuthor] = useState(existingNote ? existingNote.author : '');
  const [date, setDate] = useState(existingNote ? existingNote.date : '');
  const [imageUrl, setImageUrl] = useState(existingNote ? existingNote.imageUrl :'');
  const [content, setContent] = useState(existingNote ? existingNote.content : '');

  useEffect(() => {
    if (!existingNote) {
      navigate('/school-notes'); // Redirect if note is not found
    }
  }, [existingNote, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNote(noteId, { title, content });
    navigate(`/school-notes/${noteId}`); // Redirect to the updated note details
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Update Note</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          className="w-full border p-2 rounded"
          required
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
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="w-full border p-2 rounded"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="bg-customBgGreen text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default NoteForm;

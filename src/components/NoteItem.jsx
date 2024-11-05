import { useContext } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';

const NoteItem = () => {
  const { noteId } = useParams();
  const { notes, deleteNote } = useContext(NotesContext);
  const navigate = useNavigate();
  const note = notes.find((n) => n.id === noteId);

  if (!note) {
    return <p>Note not found.</p>;
  }

  const handleDelete = () => {
    deleteNote(noteId);
    navigate('/school-notes'); // Go back to note list after deletion
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">{note.title}</h2>
      <p className="text-gray-700 my-4">{note.content}</p>
      <div className="space-x-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
        <Link to={`/school-notes/edit/${noteId}`} className="bg-blue-500 text-white px-4 py-2 rounded">
          Update
        </Link>
        <Link to="/school-notes" className="bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </Link>
      </div>
    </div>
  );
};

export default NoteItem;

// NoteList.jsx
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';

const NoteList = () => {
  const { notes } = useContext(NotesContext);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div key={note.id} className="bg-white shadow rounded p-4">
            <h3 className="text-xl font-semibold">{note.title}</h3>
            <p className="text-gray-700">{note.content.substring(0, 50)}...</p>
            <Link
              to={`/school-notes/${note.id}`}
              className="text-blue-500 mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;

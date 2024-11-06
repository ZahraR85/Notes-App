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
        {notes && notes.length > 0 ? (
          notes.map((note) => (
            <div
              key={note.id}
              className="bg-customBg1 relative border w-64 h-90 rounded overflow-hidden shadow-lg 
              transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Link
                to={`/school-notes/${note.id}`}
                className="text-blue-500 mt-2 inline-block"
              >
                <h3 className="text-xl font-semibold">{note.title}</h3>
                <p className="text-gray-700">{note.content.substring(0, 50)}...</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No notes available. Please add some notes.</p>
        )}
      </div>
    </div>
  );
};

export default NoteList;

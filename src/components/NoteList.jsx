import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';

const NoteList = () => {
  const { notes } = useContext(NotesContext);
  const [sortedNotes, setSortedNotes] = useState([]);

  useEffect(() => {
    if (notes && notes.length > 0) {
      // Sort the notes by date (newest first)
      const sorted = [...notes].sort((a, b) => new Date(b.date) - new Date(a.date));
      setSortedNotes(sorted);
    }
  }, [notes]);

  return (
    <div className="container mx-auto p-4 mb-16">
      <h2 className="text-2xl font-bold mb-4">List of Notes</h2>
      <div className="grid grid-cols-5 gap-5 mt-6">
        {sortedNotes && sortedNotes.length > 0 ? (
          sortedNotes.map((note) => (
            <div
              key={note.id}
              className="bg-customBg1 relative border w-64 h-90 rounded overflow-hidden shadow-lg 
              transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Link
                to={`/school-notes/${note.id}`}
                className="text-green-800 mt-2 inline-block"
              >
                <img src={note.imageUrl} alt={note.title} className="w-full h-60 p-4" />
                <div className="p-2 text-center">
                  <h3 className="text-2xl font-semibold">{note.title}</h3>
                  <p className="text-gray-600 text-sm p-2">{note.author}</p>
                  <p className="text-gray-800 text-sm p-2">{note.date}</p>
                </div>
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

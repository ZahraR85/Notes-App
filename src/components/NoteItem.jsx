import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { NotesContext } from '../context/NotesContext';

const NoteItem = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const { notes, updateNote, deleteNote } = useContext(NotesContext);
  const note = notes.find((n) => n.id === noteId);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note?.title || '');
  const [author, setAuthor] = useState(note?.author || '');
  const [date, setDate] = useState(note?. date || '');
  const [imageUrl, setImageUrl] = useState(note?. imageUrl || '');
  const [content, setContent] = useState(note?.content || '');

  if (!note) {
    return <p>Note not found.</p>;
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedNote = { ...note, title, author, date, imageUrl, content };
    updateNote(updatedNote);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this entry?');
    if (confirmed) {
    deleteNote(noteId);
    navigate('/school-notes'); // Navigate back to notes list after deletion
  }};

  return (
    <div className="flex justify-center items-start pt-20 min-h-screen bg-customBg">
      <div className="container max-w-5xl w-4/5 p-8 bg-customBg1 shadow-lg rounded-lg">
        {isEditing ? (
          <>
            <h1 className="text-2xl font-bold mb-4 text-center">Edit Note</h1>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded"
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
              />
              <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="8"
                className="block w-full p-2 border border-gray-300 rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-green-800 text-white py-2 text-lg rounded w-full"
              >
                Update
              </button>
            </form>
          </>
        ) : (
          <div className='flex flex-row space-x-8'>
            <div className='flex-none w-1/3'>
              <img src={note.imageUrl} alt={note.title} className="w-full h-60 p-4"/>
            </div >
            <div className='flex-1 p-2 text-start'>
              <h3 className="text-2xl font-semibold mb-4">{note.title}</h3>
              <p className="text-gray-600 text-sm p-2">{note.author}</p>
              <p className="text-gray-800 text-sm p-2">{note.date}</p>
              <p className="mb-8">{note.content}</p>
              <div className="flex space-x-4 text-center">
                <button
                  onClick={handleDelete}
                  className="bg-customBgGreen text-white py-2 px-16 text-lg rounded mt-10"
                > Delete
                </button>
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-customBgGreen text-white py-2 px-16 text-lg rounded mt-10"
                > Edit
                </button>
                <button
                  onClick={() => navigate('/school-notes')}
                  className="bg-customBgGreen text-white py-2 px-16 text-lg rounded mt-10"
                > Back
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteItem;
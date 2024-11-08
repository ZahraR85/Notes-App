import { Routes, Route } from 'react-router-dom';
import NoteList from '../components/NoteList';
import NoteItem from '../components/NoteItem';

const SchoolNote = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">School Notes</h2>
      <Routes>
        {/* Route for displaying all notes in card format */}
        <Route path="/" element={<NoteList />} />

        {/* Route for viewing a single note with edit/delete options */}
        <Route path="/:noteId" element={<NoteItem />} />

      </Routes>
    </div>
  );
};

export default SchoolNote;

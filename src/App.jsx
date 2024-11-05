
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
//import SchoolNote from './pages/SchoolNote';
import NewNoteForm from './pages/NewNoteForm'; 
import NoteItem from './components/NoteItem';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import NotesProvider from './context/NotesContext';

const App = () => {
  return (
    <NotesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school-notes" element={<NoteList />} />
          <Route path="/school-notes/new" element={<NewNoteForm />} /> {/* Route for adding new note */}
          <Route path="/school-notes/:noteId" element={<NoteItem />} />
          <Route path="/school-notes/edit/:noteId" element={<NoteForm />} /> {/* Route for editing */}
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </NotesProvider>
  );
};

export default App;

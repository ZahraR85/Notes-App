import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import NewNoteForm from './pages/NewNoteForm';
import NoteItem from './components/NoteItem';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import DiaryList from './components/Diary/DiaryList';
import AddNewDiary from './components/Diary/AddNewDiary';
import SingleDiaryDetail from './components/Diary/SingleDiaryDetail';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import NotesProvider from './context/NotesContext';

const App = () => {
  return (
    <NotesProvider>
      <Router>
        <Routes>
          {/* Wrap routes inside MainLayout for shared Navbar and Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/diary-list" element={<DiaryList />} />
            <Route path="/diary-list/new" element={<AddNewDiary />} />
            <Route path="/diary-list/:id" element={<SingleDiaryDetail />} />
            <Route path="/school-notes" element={<NoteList />} />
            <Route path="/school-notes/new" element={<NewNoteForm />} />
            <Route path="/school-notes/:noteId" element={<NoteItem />} />
            <Route path="/school-notes/edit/:noteId" element={<NoteForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
        </Routes>
      </Router>
    </NotesProvider>
  );
};
export default App;

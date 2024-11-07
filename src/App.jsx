import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import NewNoteForm from './pages/NewNoteForm';
import NoteItem from './components/NoteItem';
import NoteList from './components/NoteList';
import DiaryList from './components/Diary/DiaryList';
import AddNewDiary from './components/Diary/AddNewDiary';
import SingleDiaryDetail from './components/Diary/SingleDiaryDetail';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import NotesProvider from './context/NotesContext';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('currentUser'));

  // Listen to storage changes to keep `isLoggedIn` state in sync
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('currentUser'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/signin" />;
  };

  return (
    <AuthProvider>
      <NotesProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={isLoggedIn ? <Navigate to="/" /> : <Register />} />
            <Route path="/signin" element={isLoggedIn ? <Navigate to="/" /> : <SignIn />} />

            {/* Protected Routes */}
            <Route
              path="/diary-list"
              element={
                <ProtectedRoute>
                  <DiaryList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/diary-list/new"
              element={
                <ProtectedRoute>
                  <AddNewDiary />
                </ProtectedRoute>
              }
            />
            <Route
              path="/diary-list/:id"
              element={
                <ProtectedRoute>
                  <SingleDiaryDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/school-notes"
              element={
                <ProtectedRoute>
                  <NoteList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/school-notes/new"
              element={
                <ProtectedRoute>
                  <NewNoteForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/school-notes/:noteId"
              element={
                <ProtectedRoute>
                  <NoteItem />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </NotesProvider>
  </AuthProvider>
  );
};

export default App;

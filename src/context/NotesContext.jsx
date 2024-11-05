// NotesContext.jsx
import { createContext, useReducer, useEffect } from 'react';

export const NotesContext = createContext();

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload];
    case 'DELETE_NOTE':
      return state.filter(note => note.id !== action.payload);
    case 'UPDATE_NOTE':
      return state.map(note =>
        note.id === action.payload.id ? action.payload : note
      );
    default:
      return state;
  }
};

export const NotesProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(notesReducer, [], () => {
    const localData = localStorage.getItem('notes');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Define addNote with unique ID generation
  const addNote = (note) => {
    const newNote = { ...note, id: Date.now().toString() }; // Assign unique ID
    dispatch({ type: 'ADD_NOTE', payload: newNote });
  };

  const deleteNote = (id) => {
    dispatch({ type: 'DELETE_NOTE', payload: id });
  };

  const updateNote = (updatedNote) => {
    dispatch({ type: 'UPDATE_NOTE', payload: updatedNote });
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider; 
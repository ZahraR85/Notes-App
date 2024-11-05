import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './components/HomePage';
//import AddEntryModal from './components/AddEntryModal';
//import EntryDetailsModal from './components/EntryDetailsModal';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
    {/* <Route path="/add-entry" element={<AddEntryModal />} />
      <Route path="/entry/:id" element={<EntryDetailsModal />} />*/}
    </Route>
  )
);
const App = () => <RouterProvider router={router} />;

export default App;
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notes from '../src/pages/Notes'
import CreateNotes from '../src/pages/CreateNote'
import EditNotes from '../src/pages/EditNotes'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Notes />} />
        <Route path='/create-notes' element={<CreateNotes />} />
        <Route path='/edit-notes/:id' element={<EditNotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

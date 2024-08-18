import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notes from '../src/pages/Notes';
import CreateNotes from '../src/pages/CreateNote';
import EditNotes from '../src/pages/EditNotes';
import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes notes={notes} />} />
          <Route path='/create-note' element={<CreateNotes setNotes={setNotes} />} />
          <Route path='/edit-note/:id' element={<EditNotes notes={notes} setNotes={setNotes}/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

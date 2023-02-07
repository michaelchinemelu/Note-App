import {
  BrowserRouter as Router, 
  Route, Routes 
} from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import NoteListPage from './pages/NoteListPage';
import NotePage from './pages/NotePage';
import AddNote from './components/AddNote'
import Chioma from './ReactCourse/Basic'


function App() {
  return (
  
 
    <div className="container">
      <div className="app"> 
      <Router>
        <Header />
          <Route path='/note/:id' exact component={NotePage} />
          <Route path='/' exact component={NoteListPage} />
          <Route path='/basics' exact component={Chioma} />
          
        </Router>
      </div>
    </div>
  
  
  );
}

export default App;

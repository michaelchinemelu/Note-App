import React, {useState, useEffect} from 'react'
import ListItem from './ListItem'
import NotePage from './NotePage'
import AddNote from  '../components/AddNote'
import '../static/css/NoteListPage.css';

const NoteListPage = () => {
    let [notes, setNotes] = useState([])


    useEffect(() => {
        getNote()
    },[])


    let getNote = async () => {
        let response = await fetch('http://localhost:8000/notes/')
        let data = await response.json() 
        setNotes(data)
    }

    return(
        <div className="notes"> 
            <div className="note-header">
                <h2 className="note-title"><span className="bar">&#9782;</span> Notes</h2>
                <p className="note-count">{notes.length}</p>
            </div>
            <div className="note-list">
                {notes.map((note, index) => (
                        <ListItem key={index} note={note} />
                ))} 
            </div>
            <AddNote />
        </div>
    )
}

export default NoteListPage;
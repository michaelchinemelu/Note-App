import {Link} from 'react-router-dom'
import '../App.css';
import React, {useState, useEffect} from 'react'
//import notes from '../assets/data'
import leftChevron from '../images/leftChevron.svg'
import Delete from '../images/Delete.svg'

const NotePage = ({match, history}) => {
    let noteId = match.params.id
    //const note = notes.find(note => note.id === Number(noteId))
    let [note, setNote]  = useState(null) // States should be set at the top of every component
/** I used use effect to triger the getNote function that I created **/

    useEffect(() => {
        getNote()
    },[])



    let getNote = async () => {
        if(noteId === 'new') return
        let response = await fetch(`http://localhost:8000/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }

    let createNote = async () => {
        await fetch(`http://localhost:8000/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify({...note, 'updated': new Date()})
        })
    }

    let updateNote = async () => {
        await fetch(`http://localhost:8000/notes/${noteId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify({...note, 'updated': new Date() })
        })
    }

    let deleteNote = async () => {
        await fetch(`http://localhost:8000/notes/${noteId}`, {  
        method: 'DELETE',
        headers: {
            'Conent_Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
    history.push('/')
}


    let handleSubmit = () => {
        if(noteId !== 'new' && !note.body) {
            deleteNote()
        } else if(noteId !== 'new') {
            updateNote()
        } else if(noteId === 'new' && note !== null) {
            createNote()
        }
         
        history.push('/')
    }




// My functionalities stops here, then I am rendering the Jsx blocks
    return(
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to='/' >
                        <i><img className="left-button" onClick={handleSubmit} src={leftChevron} alt="back" width="30px"/></i>
                    </Link>
                </h3>
                {noteId !== 'new' ? (
                  <button><img className="delete" onClick={deleteNote} src={Delete} alt="Delete" width="30px" /></button>  
                ):(
                    <Link to="/">
                    <button className="button"  onClick={handleSubmit}>Done</button>
                    </Link>
                )}
                
            </div>
            <textarea autoFocus onChange={(e) => {setNote({...note, 'body':e.target.value})}} value={note?.body}>

            </textarea>
        </div>
    )
}

export default NotePage;
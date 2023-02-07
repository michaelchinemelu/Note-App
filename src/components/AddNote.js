

import Add from '../images/Add.svg'
import { Link } from 'react-router-dom' 
import '../App.css'
const AddNote = () => {

    return(
        <Link to="/note/new" >
            <button className="add-note-icon">
                <img src={Add} width="55px" alt="Add Note" />
            </button>
             
        </Link>
    )
}

export default AddNote
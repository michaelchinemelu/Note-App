
import { Link } from 'react-router-dom';



const getDate = (note) => {
 let date = new Date(note.updated).toLocaleDateString();
 return date;
}

let getTitle = (note) => {
  const title = note.body.split('\n')[0]
  if(title.length > 40){
    return title.slice(0, 40) + '...'
  }
  return title
}


const ListItem = ({note}) => {
    return (
        <div class="note-list-item">
          <Link to={`./note/${note.id}`}>
            <p><strong>{getTitle(note)}</strong></p>
            <p className="date">{getDate(note)}</p>
          </Link>
        </div>
    )
}
export default ListItem
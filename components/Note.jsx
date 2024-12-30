import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props){
  function handleClick(){
    props.noteDelete(props.id)

  }
  return(
    <div className="Notes-Container">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="Delete" onClick={handleClick}>
        <DeleteIcon />
        </button>
    </div>
  )
}
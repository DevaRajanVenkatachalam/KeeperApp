import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
export default function CreateNotes(props){

  const [isRender,setRender]=useState(true);
const [note,setNote]=useState({
  title: "",
  content: ""
});
function handleChange(event){
const {name,value}=event.target;
 setNote(prevNote =>{ 
  return{
    ...prevNote,
  [name]:value
  }
   })
}
function handleClick(event){
  props.onAdd(note)
  setNote({
    title:"",
    content:""

  })
  event.preventDefault();
}
  return(
    <div>
 <div className='Form-Container'>  
<form className='Form'>
  <input className='in' type="text" name='title' value={note.title}
  onChange={handleChange} placeholder="Title"/>
  <textarea  className='txt' name="content" value={note.content} rows="3"
   onChange={handleChange}    placeholder="Take a note..."
   />
   <button onClick={handleClick} className="Add" >
    <AddIcon /> 
   </button>
</form>
</div>
    </div>
  )
}
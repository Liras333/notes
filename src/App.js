import {useState} from 'react';
import './index.css'

export default function App(){
    const [notes, setNotes] = useState([]);
    const [clickedNote, setClickedNote] = useState([])
    const [activeNote, setActiveNote] = useState(null);

    function handleAddItem(item) {
        setNotes([...notes, item])
    }
    
    return (
        <div className="container">
            <LeftSide >
                <Form onAddItem={handleAddItem} />
                <ListNotes notes={notes} setClickedNote={setClickedNote} activeNote={activeNote} onActiveNote={setActiveNote} />
            </LeftSide>
            <RightSide >
                {activeNote && <DisplayNote clickedNote={clickedNote} activeNote={activeNote} />}
            </RightSide>
        </div>
    )
}

function LeftSide({children}) {
    return (
        <div>
            {children}
        </div>
    )
}

function RightSide({children}) {
    return (
        <div  className="note-description">
            {children}        
        </div>
    )
}

function Form({onAddItem}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const note = {
            id: Date.now(),
            title,
            description
        }

        if(title !== "" && description !== "") onAddItem(note);
        
        setTitle("");
        setDescription("")
    }  

    return (
        <form  onSubmit={(e)=>handleSubmit(e)}>
            <fieldset>
                <span>Title</span><br />
                <legend>Make note!</legend>
                <input type="text" value={title} onChange={e=> setTitle(e.target.value)} /><br />
                <span>Note</span><br />
                <textarea  value={description} onChange={e=> setDescription(e.target.value)}></textarea><br />
                <button>Add</button>
            </fieldset>
        </form>
    )
}


function ListNotes({notes, setClickedNote, activeNote, onActiveNote}){
    return (
        <ul>
            <h3>List of Notes</h3>
            {notes.map((note,i) => <Note num={i + 1} note={note} key={note.id} setClickedNote={setClickedNote} activeNote={activeNote} onActiveNote={onActiveNote}/>)}
        </ul>
    )
}

function Note({note, setClickedNote,num,onActiveNote, activeNote}){
    const isOpen = num === activeNote;

    function onActive(){
        setClickedNote(note)
        onActiveNote(isOpen ? false : num)
    }

    return (
        <li className={isOpen ? "activated" : ""} onClick={onActive}>
            <h4>{note.title}</h4>
            <hr />
            <p>{note.description.length > 30 ? note.description.slice(0,30) + "..." : note.description}</p>
        </li>
    )
}

function DisplayNote({clickedNote}){

    return (
        <>
            <h2>{clickedNote.title }</h2>
            <hr /> 
            <p>{clickedNote.description }</p>
        </>
    )
}
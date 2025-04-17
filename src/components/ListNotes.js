import Note from "./Note";

export default function ListNotes({notes, setClickedNote, activeNote, onActiveNote, onDeleteItem}){
    return (
        <ul>
            <h3>List of Notes</h3>
            {notes.map((note,i) => <Note 
                                    num={i + 1} 
                                    note={note} 
                                    key={note.id} 
                                    setClickedNote={setClickedNote} 
                                    activeNote={activeNote} 
                                    onActiveNote={onActiveNote} 
                                    onDeleteItem={onDeleteItem}/>)}
        </ul>
    )
}

import {useState} from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import Form from './Form';
import ListNotes from './ListNotes';
import DisplayNote from './DisplayNote';

export default function App(){
    const [notes, setNotes] = useState([]);
    const [clickedNote, setClickedNote] = useState([])
    const [activeNote, setActiveNote] = useState(null);

    function handleAddItem(item) {
        setNotes([...notes, item])
    }

    function handleDeleteItem(item) {
        setNotes(notes.filter(el => el.id !== item.id))
    }
   
    
    return (
        <div className="container">
            <LeftSide >
                <Form 
                    onAddItem={handleAddItem} />
                <ListNotes 
                    notes={notes} 
                    setClickedNote={setClickedNote} 
                    activeNote={activeNote} 
                    onActiveNote={setActiveNote} 
                    onDeleteItem={handleDeleteItem} />
            </LeftSide>
            <RightSide >
                {activeNote && <DisplayNote 
                                    clickedNote={clickedNote} 
                                    activeNote={activeNote} />}
            </RightSide>
        </div>
    )
}

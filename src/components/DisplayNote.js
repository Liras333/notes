import {useState} from 'react';

export default function DisplayNote({clickedNote}){
    const [isEdit, setIsEdit] = useState(false)

    return (
        <>
            <div className="edit-note">
                <span onClick={() =>setIsEdit(!isEdit)}>📝edit</span>
            </div>
            <h2>{clickedNote.title }</h2>
            <hr /> 
            {isEdit ? <textarea className="edit">{clickedNote.description}</textarea> : <p>{clickedNote.description }</p>}
        </>
    )
}
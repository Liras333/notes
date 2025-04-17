import { useState } from 'react';

export default function Form({onAddItem}){
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
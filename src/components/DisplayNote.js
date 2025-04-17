export default function DisplayNote({clickedNote}){
    return (
        <>
            <h2>{clickedNote.title }</h2>
            <hr /> 
            <p>{clickedNote.description }</p>
        </>
    )
}
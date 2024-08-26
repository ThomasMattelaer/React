import { useState } from "react"
export default function Player({initialname, symbol, isActive}){
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(initialname)
    
    function handleEditClick(){
       setIsEditing((editing) => !editing); 
    }

    function handleChange(event){
        console.log(event)
        setPlayerName(event.target.value)
    }

    let editablePlayerName  =  <span className='player-name'>{playerName}</span>
    let editMode            = 'Edit'

    if(isEditing){
        editablePlayerName  = <input type ='text' required value={playerName} onChange={handleChange}/>
        editMode            = "Save"
    }
    return(
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {editablePlayerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{editMode}</button>
        </li>
    ) 
}
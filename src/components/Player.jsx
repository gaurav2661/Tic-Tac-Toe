import {useState} from "react";

export default function Player({player,symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    const [currentName, setCurrentName] = useState(player);

    function handleClick() {
        setIsEditing((editing) => !editing);
    }
    function handleChange(event) {
        setCurrentName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{currentName}</span>
    if(isEditing) {
        editablePlayerName = <input type="text" required value={currentName} onChange={handleChange}/>
    }
    return (
        <li>
              <span className="player">
                {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
              </span>
            <button onClick={ handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}
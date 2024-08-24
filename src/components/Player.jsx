import {useState} from "react";

export default function Player(props) {
    const [isEditing, setIsEditing] = useState(false);

    function handleClick() {
        setIsEditing((editing) => !editing);
    }

    let playerName = <span className="player-name">{props.player}</span>
    if(isEditing) {
        playerName = <input type="text" required value={props.player}/>
    }
    return (
        <li>
              <span className="player">
                {playerName}
              <span className="player-symbol">{props.symbol}</span>
              </span>
            <button onClick={ handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}
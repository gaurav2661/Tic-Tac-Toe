import {useState} from "react";

export default function Player(props) {
    const [isEditing, setIsEditing] = useState(false);

    function handleClick() {
        setIsEditing(true);
    }

    let playerName = <span className="player-name">{props.player}</span>
    if(isEditing) {
        playerName = <input type="text" required/>
    }
    return (
        <li>
              <span className="player">
                {playerName}
              <span className="player-symbol">{props.symbol}</span>
              </span>
            <button onClick={ handleClick}>Edit</button>
        </li>
    );
}
import { useState } from "react";

function Dice() {
    let [number, setNumber] = useState(1)
    function roll(ev) {
        setNumber(Math.floor(Math.random()* (7-1)+1))
    }
    return (
        <>
            <button onClick={roll} type="button"><img src={`/dice ${number}.png`} alt="" /></button>
        </>
    )
}

export default Dice
import { useState } from "react"
import Modal from './Modal'
import Hint from "./Hint"
import PropTypes from 'prop-types'
function CustomButton(props) {


let [popUp, setPopUp] = useState(false)
let [modalActive, setModalActive] = useState(false)

    return (
        <>
        <div className="button">
            <button className={`${modalActive && 'button-clicked'}`}
                    onClick={() => setModalActive(!modalActive)}
                    onMouseOver={() => setPopUp(true)}
                    onMouseLeave={() => setPopUp(false)}>
                    
                    
            {props.text}
            </button>
            {popUp && <Hint hint = {props.hint}/>}
            {modalActive && <Modal warnMessage = {props.warnMessage}/>}
        </div>
        
        </>
    )
}

CustomButton.propTypes = {
    text: PropTypes.string
}

CustomButton.defaultProps = {
    text: 'SHOW WARN MESSAGE'
















}

export default CustomButton
import PropTypes from 'prop-types'
function Modal(props) {
    return(
        <>
            <p className='warn'>{props.warnMessage}</p>
        </>
    )
}

Modal.propTypes = {
    warnMessage: PropTypes.string
}

Modal.defaultProps = {
    warnMessage: 'THIS IS THE WARN MESSAGE'
}

export default Modal
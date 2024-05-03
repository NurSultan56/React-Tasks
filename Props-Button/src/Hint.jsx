import PropTypes from 'prop-types'
function Hint(props) {
    return(
        <>
            <p className='hint'>{props.hint}</p>
        </>
    )
}

Hint.propTypes = {
    hint: PropTypes.string
}

Hint.defaultProps = {
    hint: 'THIS IS HINT'
}

export default Hint
import PropTypes from 'prop-types'

export default function Card (props) {

    if (props.email === '' || props.password === '') {
        return (
            <></>
        )
    } else {
        return (
            <>
            <ul className="card">
                <li>{props.email}</li>
                <li>{props.password}</li>
            </ul>
        </>
        )
    }
}

Card.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
}
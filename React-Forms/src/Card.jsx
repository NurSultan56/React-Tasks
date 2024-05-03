// import PropTypes from 'prop-types'

export default function Card(props) {
    if (props.name === '') {
        return (
            <>
            </>
        )
    } else {
        return (
            <>
                <div className="card">
                    <p>{props.name}</p>
                    <p>{props.surname}</p>
                    <p>{props.phoneNumber}</p>
                    <p>{props.email}</p>
                    <p>{props.text}</p>
                </div>
            </>
        )
    }
}

// Card.propType = {
//     name: PropType.string,
//     surname: PropType.string
// }
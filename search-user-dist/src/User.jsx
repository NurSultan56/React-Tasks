
export default function User (props) {
    return (
        <>
            <li>
                <p>{props.item.name}</p>
                <p>{props.item.department}</p>
                <p>{props.item.role}</p>
            </li>
        </>
    )
}
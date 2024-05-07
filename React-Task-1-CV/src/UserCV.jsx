import Contacts from "./Contacts";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import './UserCV.css'

function UserCV () {
    return (
        <>
            <PersonalInfo />
            <Experience/>
            <Contacts/>        
        </>
    )
}

export default UserCV
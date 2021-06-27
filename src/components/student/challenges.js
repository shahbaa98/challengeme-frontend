import { useFetch } from "../../useAPI";
import '../style.css'
import { useHistory,useParams} from "react-router-dom";
import { useAuth } from '../../contexts/UserContext';
import StudentClass from "../Teacher/StudentClass";
import StudentProfile from "./StudentProfile";



const Challenges = () => {
    const { userprofile } = useAuth();
    const params = useParams();
    const history = useHistory();
    const { data } = useFetch(`teacher/classes/1/student/${userprofile.id}/challanges/`, []);
    return (
        <div className="app-com">
        <br/>
        <br/>
            <h1 className="text1">
                האתגרים שלי
            </h1>
            {data.map((Challanges) => {
                return (
                    <div className="ClassName" style={{ marginBottom: 20 }}>
                        <div><span className="verticalMiddle" onClick={() => { history.push(`/OneChallenge`) }}>{Challanges.title}</span></div>
                    </div>
                )
            })}
        </div>
    )
}
export default Challenges

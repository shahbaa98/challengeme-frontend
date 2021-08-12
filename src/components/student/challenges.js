import { useFetch } from "../../useAPI";
import '../style.css'
import { useHistory, useParams } from "react-router-dom";
import { useAuth } from '../../contexts/UserContext';

const Challenges = () => {
    const { userprofile } = useAuth();
    const params = useParams();
    const history = useHistory();
    const { data } = useFetch(`students/${userprofile.id}/challanges`, []);
    return (
        <div className="app-com">
            <div>
                <div align="left" onClick={() => { history.push('/StudentProfile') }}>
                    <button className="button"> אחורה </button>
                </div>
            </div>
            <br />
            <br />
            <h1 className="text1">
                האתגרים שלי
            </h1>
            {data.map((challanges) => {
                return (
                    <div className="ClassName" onClick={() => { history.push(`/challanges/${challanges.id}`) }} style={{ marginTop: 20, marginBottom: 20 }}>
                        <div className="verticalMiddle">{challanges.Title}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default Challenges

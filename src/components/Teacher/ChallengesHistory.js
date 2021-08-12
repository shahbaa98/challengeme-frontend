
import { useHistory } from "react-router-dom";
import { useFetch } from "../../useAPI";


const ChallengesHistory = () => {
    const { data } = useFetch(`teacher/challanges/`, []);
    console.log(data)
    const history = useHistory();
    return (
        <div className="app-com">

            <div align="left" onClick={() => { history.push('/Challenge') }}>
                <button className="button"> אחורה </button>
            </div>
            <div>
            {data.map((challanges) => {
                return (
                    <div className="ClassName"  style={{ marginTop: 20, marginBottom: 20 }}>
                        <div className="verticalMiddle">{challanges.Title}</div>
                    </div>
                )
            })}
            </div>
        </div>
        
    )

}
export default ChallengesHistory
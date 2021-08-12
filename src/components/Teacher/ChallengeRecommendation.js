import { useHistory } from "react-router-dom";
import { useFetch } from "../../useAPI";


const ChallengeRecommendation = () => {
    const history = useHistory();
    const { data } = useFetch(`students/64/challanges`, []);
    return (
        <div className="app-com">

            <div align="left" onClick={() => { history.push('/Challenge') }}>
                <button className="button"> אחורה </button>
            </div>
            {data.map((challanges) => {
                return (
                    <div className="ClassName"  style={{ marginTop: 20, marginBottom: 20 }}>
                        <div className="verticalMiddle">{challanges.Title}</div>
                    </div>
                )
            })}
        </div>
    )

}
export default ChallengeRecommendation
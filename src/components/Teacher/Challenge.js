import { useHistory } from "react-router-dom";
import ChallengeRecommendation from '../imgs/new_challenge.png'
import ChallengesHistory from '../imgs/history.png'
import newchallenge from '../imgs/new.png'
import '../style.css'
import react from 'react';


const Challenge = () => {
    const history = useHistory();
    return (
        <div className="app-com">
            <div>
                <div align="left" onClick={() => { history.push('/TeacherProfile') }}>
                    <button className="button"> אחורה </button>
                </div>
            </div>
            <div className="Report">
                <h3 className="text" >בחר אתגר מהמסד</h3>
                <img width='200px' height='180px' src={ChallengesHistory} onClick={() => { history.push('/ChallengesHistory') }} />
                <br />
            </div>

            <div className="newchallenge">
                <h3 className="text" > הוספת אתגר חדש</h3>
                <img width='200px' height='180px' src={newchallenge} onClick={() => history.push("/add-challenge")} />
                <br />
            </div>

            <div className="plan ">
                <h3 className="text">המלצה על אתגר מאתים</h3>
                <img width='200px' height='180px' src={ChallengeRecommendation} onClick={() => { history.push('/ChallengeRecommendation') }} />
                <br />
            </div>
        </div>
    )
}
export default Challenge

import img from "../imgs/image3.png";
import done from "../imgs/done.gif";
import help from "../imgs/WhatsApp Image 2021-06-27 at 17.23.58.jpeg";
import no from "../imgs/no.png"
import newchallenge from "../imgs/new.png";
import plan from "../imgs/plan.png";
import React from "react";
import { useHistory, useParams } from 'react-router-dom';
import { useFetch } from "../../useAPI";
import { useAuth } from '../../contexts/UserContext';



const OneChallenge = () => {
    const history = useHistory();
    const { userprofile } = useAuth();
    const params = useParams();
    const { data } = useFetch(`teacher/classes/1/student/${userprofile.id}/challanges/${params.challanges_id}`, []);


    return (
        <div className="app-com">
            <div>
                <div align="left" onClick={() => { history.push('/challenges') }}>
                    <button className="button"> אחורה </button>
                </div>
            </div>
            <br/>
            <h1 className="text">{data.challenge_id}</h1>

            <br/>
            <br/>
            <div className="Report">
                <h3 className="text" >הצלחתי</h3>
                <img width='200px' height='180px' src={done}  />
                <br />
            </div>

            <div className="newchallenge">
                <h3 className="text" > צריך עזרה</h3>
                <img width='200px' height='180px' src={help} />
                <br />
            </div>

            <div className="no ">
                <h3  className="text">לא הצלחתי</h3>
                <img width='200px' height='180px' src={no}  />
                <br />
            </div>
        </div>)
}
export default OneChallenge

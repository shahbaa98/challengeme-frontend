import { useHistory } from 'react-router-dom';
import img from './imgs/image3.png'

import './style.css'
const Teacherlogin = () =>{
    const history = useHistory();
    function onSubmit() {
        history.push('/TeacherProfile')
    }

    function singUp() {
        history.push('/SignUp')
    }

    return(
        alert = () => {
            return(<h1>הודעה נשלחה למורה שלך, אל דאגה הסיסמה שלך תשלח אליך בקרוב</h1>);
        },
            <div className="app-com">
                <form
                    onSubmit={onSubmit}
                    validate={values => {
                        const errors = {};
                        if (!values.username) {
                            errors.username = "Required";
                        }
                        if (!values.password && values.username === "test") {
                            errors.password = "Required";
                        }
                        return errors;
                    }}>
                    <div>
                        <img align="left" src={img} alt="" width="200" height="200"/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1>
                        התחבר
                    </h1>
                    <div >
                        <input className="placeholder" type="text" required placeholder="שם משתמש"/>
                    </div>
                    <br/>
                    <div >
                        <input className="placeholder" type="text" required placeholder="סיסמה"/>
                    </div>
                    <text onPress={()=>{}}>
                        שכחת סיסמה?
                    </text>
                    <br/>
                    <text onClick={singUp}>
                        עדיין לא נרשמת?
                    </text>
                    <div >
                        <button className="buttonStyle" >
                            התחבר
                        </button>
                    </div>
                </form>
            </div>
    )
}

/*export function Teacherlogin(props) {
    const history = useHistory();
    const [alignment, setAlignment] = useState("right");


  return (
    <BoxContainer >
      <FormContainer>
        <Input type="email" placeholder="אימיל" style={{ textAlign: 'right' }} />
        <Input type="password" placeholder="סיסמה" style={{ textAlign: 'right' }}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">שכחתי סיסמה</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit"  onClick={()=> {history.push('/TeacherProfile')}}>כניסה</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        אין לי חשבון{" "}
        <BoldLink href="#" onClick={()=> {history.push('/SignUp')}}>
          הירשם
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}*/
export default Teacherlogin 


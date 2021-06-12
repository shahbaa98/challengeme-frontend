import React, {isValidElement, useContext} from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./Common";
import { useHistory } from 'react-router-dom';
import {Marginer} from "./Marginer";
import {Button} from "@material-ui/core";
import img from "./imgs/image3.png";

export function SignupForm(props) {
    const history = useHistory();

    function onSubmit() {
        history.push('/TeacherProfile')
    }

    return (
        <BoxContainer>
            <Form
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
                <h1>הרשמה</h1>
                <div>
                    <input className="placeholder" type="text" required placeholder="שם פרטי"/>
                </div>
                <br/>
                <div>
                    <input className="placeholder" type="text" required placeholder="שם משפחה"/>
                </div>
                <br/>
                <div>
                    <input className="placeholder" type="number" required placeholder="מספר טלפון"/>
                </div>
                <br/>
                <div>
                    <input className="placeholder" type="email" required placeholder="אמייל"/>
                </div>
                <br/>
                <div>
                    <input className="placeholder" type="text" required placeholder="בית הספר"/>
                </div>
                <br/>
                <div>
                    <input className="placeholder" type="text" required placeholder="שם משתמש"/>
                </div>
                <br/>
                <div>
                    <input className="placeholder" type="text" required placeholder="סיסמה"/>
                </div>
                <div>
                    <input className="placeholder" type="text" required placeholder=" אימות סיסמה"/>
                </div>
                <br/>
                <div>
                    <button className="buttonStyle">
                        הירשם
                    </button>
                </div>
            </form>
        </div>
    )
}
export default SignupForm
        /*<Input type="text" required placeholder="שם פרטי " />
        <Input type="text" required placeholder="שם משפחה " />
        <Input type="number" required placeholder="מספר טלפון " />
        <Input type="email" required placeholder="אימייל" />
        <Input type="text" required placeholder="בית הספר " />
        <Input type="password" required placeholder="סיסמה" />
        <Button type="submit">הירשם</Button>
      </Form>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        יש לך חשבון כבר?
        <BoldLink href="#" onClick={()=> {history.push('/TeacherLogin')}}>
          כניסה
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}*/
export default SignupForm

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

export function SignupForm(props) {
    const history = useHistory();
    function onSubmit() {
        history.push('/TeacherProfile')
    }
    return (
    <BoxContainer>
      <FormContainer
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
          <h1>heyyyyyy</h1>
        <Input type="text" required placeholder="שם מלא " />
        <Input type="email" required placeholder="אימייל" />
        <Input type="password" required placeholder="סיסמה" />
        <Input type="password" required placeholder="אישור סיסמה" />
        <Button type="submit">הירשם</Button>
      </FormContainer>
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
}
export default SignupForm

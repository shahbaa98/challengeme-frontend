import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { useHistory } from 'react-router-dom';

export function SignupForm(props) {
    const history = useHistory();

  return (
    <BoxContainer>
      <FormContainer>
          <h1>heyyyyyy</h1>
        <Input type="text" placeholder="שם מלא " />
        <Input type="email" placeholder="אימיל" />
        <Input type="password" placeholder="סיסמה" />
        <Input type="password" placeholder="אישור סיסמה" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">הירשם</SubmitButton>
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
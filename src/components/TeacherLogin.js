import React, { useContext } from "react";
import { useState } from "react";

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./Common";
import { Marginer } from "./Marginer";
import { AccountContext } from "./AccountContext";
import { useHistory } from 'react-router-dom';


export function Teacherlogin(props) {
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
}
export default Teacherlogin 


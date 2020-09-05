import React from "react";
import styled from "@emotion/styled";
import { Button, InputText } from "../components/atom";

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "15em",
});

const StyledSignInForm = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "300px",
});

const Row = styled.div({
  display: "flex",
  flexDirection: "row",
  marginBottom: ".5em",
  alignItems: "center",
});

const Label = styled.label({
  width: "50px",
  textAlign: "right",
});

interface FormState {
  id: string;
  password: string;
}

function SignIn(): JSX.Element {
  const [formState, setFormState] = React.useState<FormState>({
    id: "",
    password: "",
  });

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        <StyledSignInForm>
          <Row>
            <Label htmlFor="id">ID:&nbsp;</Label>
            <InputText type="text" id="id" name="id" onChange={changeHandler} />
          </Row>
          <Row>
            <Label htmlFor="password">PW:&nbsp;</Label>
            <InputText
              type="password"
              id="password"
              name="password"
              onChange={changeHandler}
            />
          </Row>
          <Button>로그인</Button>
        </StyledSignInForm>
      </form>
    </Wrapper>
  );
}

export default SignIn;

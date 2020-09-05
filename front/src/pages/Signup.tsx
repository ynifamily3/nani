import React from "react";
import styled from "@emotion/styled";
// import { debounce } from "lodash";
import { InputText, Button } from "../components/atom";

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "15em",
});

const StyledSignUpForm = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "300px",
});

const Row = styled.div({
  display: "flex",
  flexDirection: "row",
  marginBottom: ".5em",
  alignItems: "center",
  minHeight: "40px",
});

const Label = styled.label({
  width: "70px",
  textAlign: "right",
});

const AgreeLabel = styled.label({
  flex: 1,
});

interface FormState {
  id: string;
  name: string;
  password: string;
  passwordCheck: string;
  agree: boolean;
}

enum ValidationState {
  "IDLE",
  "LOADING",
  "PASS",
  "FAIL",
}

interface FormWhatState {
  id: ValidationState;
  name: ValidationState;
  password: ValidationState;
  passwordCheck: ValidationState;
}

// const debounceSomethingFunc = debounce(
//   (arg: { name: string; value: string }) => {
//     console.log("called debounceSomethingFunc", arg);
//   },
//   500
// );

function SignUp(): JSX.Element {
  const [validationState, setValidationState] = React.useState<FormWhatState>({
    id: ValidationState.IDLE,
    name: ValidationState.IDLE,
    password: ValidationState.IDLE,
    passwordCheck: ValidationState.IDLE,
  });
  const [formState, setFormState] = React.useState<FormState>({
    id: "",
    name: "",
    password: "",
    passwordCheck: "",
    agree: false,
  });
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormState({
      ...formState,
      [event.target.name]:
        event.target.name !== "agree" ? event.target.value : !formState.agree,
    });
    setValidationState({
      ...validationState,
      [event.target.name]: ValidationState.LOADING,
    });
    // event.target.name !== "agree" &&
    //   debounceSomethingFunc({
    //     name: event.target.name,
    //     value: event.target.value,
    //   });
  };

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        <StyledSignUpForm>
          <Row>
            <Label htmlFor="name">이름&nbsp;</Label>
            <InputText
              type="text"
              id="name"
              name="name"
              onChange={changeHandler}
            />
          </Row>
          <Row>
            <Label htmlFor="id">ID&nbsp;</Label>
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
          <Row>
            <Label htmlFor="passwordCheck">PW 확인:&nbsp;</Label>
            <InputText
              type="password"
              id="passwordCheck"
              name="passwordCheck"
              onChange={changeHandler}
            />
          </Row>
          <Row>
            <label
              htmlFor="agree"
              style={{
                textAlign: "right",
                width: "70px",
                paddingRight: ".3em",
                boxSizing: "border-box",
              }}
            >
              <input
                type="checkbox"
                name="agree"
                id="agree"
                onChange={changeHandler}
                checked={formState.agree}
              />
            </label>
            <AgreeLabel htmlFor="agree">약관에 동의합니다.</AgreeLabel>
          </Row>
          <Button>회원가입</Button>
        </StyledSignUpForm>
      </form>
    </Wrapper>
  );
}

export default SignUp;

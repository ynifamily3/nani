import styled from "@emotion/styled";

export const InputText = styled.input({
  flexGrow: 1,
  height: "auto",
  lineHeight: "normal",
  padding: ".8em .5em",
  border: "1px solid #999",
  borderRadius: 0,
  "&:focus": {
    outlineColor: "#1a4ebe",
  },
});

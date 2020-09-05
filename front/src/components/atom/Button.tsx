import styled from "@emotion/styled";

export const Button = styled.button({
  border: "none",
  backgroundColor: "#1a73e8",
  color: "white",
  padding: "1em",
  fontSize: ".875rem",
  cursor: "pointer",
  borderRadius: ".3em",
  "&:focus": {
    outlineColor: "#1a4ebe",
  },
  "&:hover": {
    backgroundColor: "#1a4ebe",
    transition: "all .2s",
    boxShadow: "4px 4px 12px -3px #5E5E5E",
  },
});

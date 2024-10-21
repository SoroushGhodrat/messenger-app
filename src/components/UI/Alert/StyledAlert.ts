import styled from "styled-components";

interface AlertProps {
  color: "red" | "green" | "yellow";
}

const Alert = styled.p<AlertProps>`
  color: ${(props) => props.color};
`;

export default Alert;

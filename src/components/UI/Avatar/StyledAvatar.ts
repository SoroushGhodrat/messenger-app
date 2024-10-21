import styled from "styled-components";

interface AlertProps {
    color: "red" | "green" | "yellow";
}

const Alert = styled.span<AlertProps>`
  color: ${(props) => props.color};
`;

export default Alert;

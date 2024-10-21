import styled from "styled-components";

type ButtonProps = {
  size: "small" | "medium" | "large";
  variant: "contained" | "outlined" | "text";
  text: "center" | "left" | "right";
  disabled?: boolean;
};

const getSizeStyles = (size: ButtonProps["size"]) => {
  switch (size) {
    case "small":
      return `
        padding: 5px 10px;
        font-size: 12px;
      `;
    case "medium":
      return `
        padding: 10px 20px;
        font-size: 14px;
      `;
    case "large":
      return `
        padding: 15px 30px;
        font-size: 16px;
      `;
    default:
      return `
        padding: 10px 20px;
        font-size: 14px;
      `;
  }
};

const getVariantStyles = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "contained":
      return `
        background-color: #007bff;
        color: white;
        border: none;
      `;
    case "outlined":
      return `
        background-color: transparent;
        color: #007bff;
        border: 1px solid #007bff;
      `;
    case "text":
      return `
        background-color: transparent;
        color: #007bff;
        border: none;
      `;
    default:
      return `
        background-color: #007bff;
        color: white;
        border: none;
      `;
  }
};

const getAlignStyles = (text: ButtonProps["text"]) => {
  switch (text) {
    case "center":
      return `
        text-align: center;
      `;
    case "left":
      return `
        text-align: left;
      `;
    case "right":
      return `
        text-align: right;
      `;
    default:
      return `
        text-align: center;
      `;
  }
};

const getDisabledStyles = (disabled?: boolean) => {
  if (disabled) {
    return `
      opacity: 0.6;
      cursor: not-allowed;
    `;
  }
  return "";
};

const Button = styled.button<ButtonProps>`
  background-color: #007bff;
  color: white;
  border: none;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;

  ${(props) => getSizeStyles(props.size)}
  ${(props) => getVariantStyles(props.variant)}
  ${(props) => getAlignStyles(props.text)}
  ${(props) => getDisabledStyles(props.disabled)}

  &:hover {
    background-color: #0056b3;
  }
`;

export default Button;

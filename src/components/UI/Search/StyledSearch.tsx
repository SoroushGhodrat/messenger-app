import React from "react";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import styles from "./StyledSearch.module.css";

type SearchProps = {
  size: "small" | "medium" | "large";
  variant: "contained" | "outlined" | "text";
  textPosition: "center" | "left" | "right";
  disabled?: boolean;
};

const getSizeStyles = (size: SearchProps["size"]) => {
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

const getVariantStyles = (variant: SearchProps["variant"]) => {
  switch (variant) {
    case "contained":
      return `
        background-color: #007bff;
        color: white;
        border: none;
      `;
    case "outlined":
      return `
        background-color: white;
        color: #007bff;
        border: 1px solid whitesmoke;
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

const getTextAlign = (text: SearchProps["textPosition"]) => {
  switch (text) {
    case "center":
      return "text-align: center;";
    case "left":
      return "text-align: left;";
    case "right":
      return "text-align: right;";
    default:
      return "text-align: center;";
  }
};

const StyledInput = styled.input<SearchProps>`
  type: search;
  border-radius: 10px;
  width: 100%;
  &:focus {
    outline: none;
  }
  ${(props) => getSizeStyles(props.size)}
  ${(props) => getVariantStyles(props.variant)}
  ${(props) => getTextAlign(props.textPosition)}
  ${(props) => props.disabled && "pointer-events: none;"}
`;

const Search: React.FC<SearchProps> = (props) => {
  return (
    <div className={styles["search-wrapper"]}>
      <SearchOutlined className={styles["search-icon"]} />
      <StyledInput {...props} />
    </div>
  );
};

export default Search;

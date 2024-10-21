import React from "react";
import styled from "styled-components";

type AvatarProps = {
  status: "online" | "offline" | "away";
};

const getStatusStyles = (status: AvatarProps["status"]): string => {
  switch (status) {
    case "online":
      return `
        border-color: #4caf50; /* Green for online */
      `;
    case "offline":
      return `
        border-color: #f44336; /* Red for offline */
      `;
    case "away":
      return `
        border-color: #ff9800; /* Orange for away */
      `;
    default:
      return `
        border-color: transparent;
      `;
  }
};

const AvatarContainer = styled.div<AvatarProps>`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid transparent;
  overflow: hidden;
  ${(props) => getStatusStyles(props.status)}
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Avatar: React.FC<AvatarProps> = ({ status }) => {
  return (
    <AvatarContainer status={status}>
      <AvatarImage src={"/user.jpg"} alt="Avatar" />
    </AvatarContainer>
  );
};

export default Avatar;

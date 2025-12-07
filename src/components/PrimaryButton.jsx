import React from "react";
import styled from "styled-components";

const StyledPrimaryButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  background-color: #3b82f6;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.15s ease, transform 0.1s ease,
    box-shadow 0.1s ease;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.7);

  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(15, 23, 42, 0.8);
  }
`;

function PrimaryButton({ children, ...props }) {
  return <StyledPrimaryButton {...props}>{children}</StyledPrimaryButton>;
}

export default PrimaryButton;

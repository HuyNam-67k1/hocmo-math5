"use client";

import React, { HTMLAttributes, ReactElement } from "react";
import { PropsWithChildren } from "react";

import { styled } from "styled-components";

import { getTheme } from "../../utils";

export type ButtonType =
  | "primary"
  | "secondary"
  | "teriary"
  | "outline"
  | "special";

export type ButtonSize = "sm" | "md" | "lg";

const fontSizes = {
  sm: "14px",
  md: "16px",
  lg: "18px",
};
const heights = {
  sm: "32px",
  md: "40px",
  lg: "48px",
};

const StyledButton = styled.button<{
  $buttonType: ButtonType;
  $buttonSize: ButtonSize;
}>`
  font-size: ${(props) => fontSizes[props.$buttonSize]};
  font-weight: 600;
  color: ${(props) => {
    if (props.$buttonType === "primary") {
      return "#ffffff";
    }
    if (props.$buttonType === "outline") {
      return getTheme(props.theme).colors["primary"];
    }
    if (props.$buttonType === "special") {
      return "#ffffff";
    }

    return getTheme(props.theme).colors["primary"];
  }};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 16px;

  height: ${(props) => heights[props.$buttonSize]};

  background: ${(props) => {
    if (props.$buttonType === "primary") {
      return getTheme(props.theme).colors["primary"];
    }
    if (props.$buttonType === "secondary") {
      return "#E9F5F0";
    }
    if (props.$buttonType === "teriary") {
      return "transparent";
    }
    if (props.$buttonType === "special") {
      return "#FF9D0A";
    }
    if (props.$buttonType === "outline") {
      return "transparent";
    }
  }};

  border-radius: 8px;

  border: ${(props) => {
    if (props.$buttonType === "primary") {
      return `1px solid ${getTheme(props.theme).colors["primary"]}`;
    }
    if (props.$buttonType === "outline") {
      return `1px solid ${getTheme(props.theme).colors["primary"]}`;
    }

    return "none";
  }};

  &:hover {
    background: ${(props) => {
      if (props.$buttonType === "primary") {
        return "#0066CC";
      }
      if (props.$buttonType === "secondary") {
        return "#BAE0D0";
      }
      if (props.$buttonType === "teriary") {
        return "#E9F5F0";
      }
      if (props.$buttonType === "special") {
        return "#D97B00";
      }
      if (props.$buttonType === "outline") {
        return "#E9F5F0";
      }
    }};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const iconSizes = {
  sm: 16,
  md: 16,
  lg: 20,
};

function Button({
  buttonType = "primary",
  buttonSize = "md",
  leftIcon,
  rightIcon,
  className = "",
  disabled = false,
  style = {},
  children,
  onClick,
  ...rest
}: PropsWithChildren<{
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  className?: string;
  style?: any;
  onClick?: any;
  disabled?: boolean;
}> &
  HTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledButton
      $buttonType={buttonType}
      $buttonSize={buttonSize}
      className={className}
      style={style}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {leftIcon &&
        React.cloneElement(leftIcon, {
          width: iconSizes[buttonSize],
          height: iconSizes[buttonSize],
          style: { marginRight: "8px" },
        })}
      {children}
      {rightIcon &&
        React.cloneElement(rightIcon, {
          width: iconSizes[buttonSize],
          height: iconSizes[buttonSize],
          style: { marginLeft: "8px" },
        })}
    </StyledButton>
  );
}

export default Button;

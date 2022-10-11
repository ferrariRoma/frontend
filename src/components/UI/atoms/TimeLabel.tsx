/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import RegularText from "./RegularText";
import { BiStopwatch } from "react-icons/bi";
import { css, Theme } from "@emotion/react";
interface TimeType {
  time: number;
}

const TimeLabel = ({ time }: TimeType) => {
  return (
    <div
      css={(theme: Theme) => css`
        background-color: ${theme.colors.bgColor};
        white-space: pre;
        display: flex;
        padding: 1rem;
        font-weight: 500;
      `}
    >
      <BiStopwatch />
      <RegularText>{time / 1000 / 60}m</RegularText>
    </div>
  );
};

export default TimeLabel;

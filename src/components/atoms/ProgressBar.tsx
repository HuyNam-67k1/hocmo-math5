import { ReactNode } from "react";

import { styled } from "marathon-design-system";

type ProgressBarVariant = "circle" | "straight";

interface BaseProgressBarProps {
  size?: number;
  percentage?: number;
  strokeWidth?: number;
  label?: ReactNode;
  className?: string;
  height?: number;
  showPercentage?: boolean;
}

interface ProgressBarProps extends BaseProgressBarProps {
  variant: ProgressBarVariant;
}

const CircularProgressBarStyled = styled.div`
  .circle-background,
  .circle-progress {
    fill: none;
  }

  .circle-background {
    stroke: #ececec;
  }

  .circle-progress {
    stroke: #219b67;
  }

  .circle-label {
    font-size: 12px;
    fill: #242424;
    color: #242424;
    font-weight: 400;
    div {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }
`;

export const CircularProgressBar = (props: BaseProgressBarProps) => {
  const {
    size = 100,
    percentage = 25,
    strokeWidth = 3.5,
    label,
    className,
  } = props;

  const sqSize = size;
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <CircularProgressBarStyled className={className}>
      <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        <circle
          className="circle-background"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          className="circle-progress"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
        <foreignObject className="circle-label" width={size} height={size}>
          <div>{label || `${percentage}%`}</div>
        </foreignObject>
      </svg>
    </CircularProgressBarStyled>
  );
};

const StraightProgressBarStyled = styled.div<{
  $percentage: number;
  $height?: number;
}>`
  position: relative;
  height: ${(props) => (props.$height ? `${props.$height}px` : "0.5rem")};
  border-radius: 10px;
  background: #d9d9d9;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: ${(props) => `${100 - props.$percentage}%`};
    background: #3562c9;
    border-radius: 10px;
  }
`;

export const StraightProgressBar = (props: BaseProgressBarProps) => {
  const { percentage = 25, className, height, showPercentage = false } = props;

  return (
    <div className={className}>
      {showPercentage && (
        <span className="block w-full text-right text-sm text-[#212121]">{`${percentage}%`}</span>
      )}
      <StraightProgressBarStyled $percentage={percentage} $height={height} />
    </div>
  );
};

function ProgressBar(props: ProgressBarProps) {
  const { variant, ...rest } = props;

  if (variant === "circle") {
    return <CircularProgressBar {...rest} />;
  }

  return <StraightProgressBar {...rest} />;
}

export default ProgressBar;

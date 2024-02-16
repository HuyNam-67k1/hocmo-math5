import styled from "styled-components";

const LoadingStyled = styled.div`
  border: 5px solid #f3f3f3;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
  border-top: 5px solid #28a06d;
  border-radius: 50%;
  width: 30px;
  height: 30px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loading = ({
  full = false,
  className = "",
}: {
  full?: boolean;
  className?: string;
}) => (
  <div
    className={`${
      full ? "w-full" : ""
    } h-full flex justify-center items-center ${className}`}
  >
    <LoadingStyled />
  </div>
);

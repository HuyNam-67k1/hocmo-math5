import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const StyledToastContainer = styled(ToastContainer as any)`
  top: 56px;
  .Toastify__progress-bar--success {
    background: #219b67;
  }
  .Toastify__toast--success {
    .Toastify__toast-icon {
      svg {
        fill: #219b67;
      }
    }
  }
`;

export const Toastify = () => (
  <StyledToastContainer
    position="top-right"
    hideProgressBar={false}
    autoClose={2000}
    newestOnTop={true}
    closeOnClick={false}
    draggable={false}
    rtl={false}
  />
);

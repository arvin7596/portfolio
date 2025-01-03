import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  max-width: 1200px;
  width: 90%;
  text-align: center;
  z-index: 1001;

  img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const ModalCloseButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1002;
`;

export const ModalDescription = styled.p`
  margin-top: 1rem;
`;

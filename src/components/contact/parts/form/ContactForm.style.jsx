import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: 24rem 1fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  text-align: start;
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

const Input = styled.input`
  color: var(--color-black-900);
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-900);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;
const Textarea = styled.textarea`
  color: var(--color-black-900);
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-900);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

const ButtonRow = styled.div`
  text-align: end;
`;

export { StyledFormRow, Label, Input, Textarea, Error, ButtonRow };

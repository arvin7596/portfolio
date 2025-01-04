import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SidebarItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
  padding: 10px;
  /* background-color: #444;
  border-radius: 5px; */

  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const Icon = styled.span`
  font-size: 20px;
  display: flex;
`;

export { List, SidebarItem, Icon };

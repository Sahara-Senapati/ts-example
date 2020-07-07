import styled from "styled-components";

export const StyleButton = styled("button")`
  align-items: center;
  user-select: none;
  display: inline-flex;
  justify-content: center;
  padding: 6px 16px;
  flex-shrink: 0;
  border-radius: 3px;
  font-weight: 500;
  background: #3ca59d;
  color: white;
  border: 1px solid #086972;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;
  width: 5%;
  margin-top: 5px;
  cursor: pointer;
  &:hover {
    background-color: #086972;
  }
`;

export const H1style= styled('h1')`
margin-bottom:5px;
color: #086972;
font-weight: bold;
overflow: hidden;
font-family:Arial;
font-size:22px;                
text-align:center;

`;
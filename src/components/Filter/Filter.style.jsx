import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 5px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: calc(20 / 24);
  margin-top: 20px;
`;

export const Input = styled.input`
  margin: auto;
  margin-top: 10px;
  border: solid #212121 2px;
  height: 20px;
  width: 250px;

  transition: background-color 500ms linear;

  &:focus {
    background-color: lightblue;
  }
`;

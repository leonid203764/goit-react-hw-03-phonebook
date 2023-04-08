import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 15px;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 20px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: background-color 500ms linear;

  &:hover {
    background-color: lightgray;
  }
`;

export const Text = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(20 / 24);
  margin-right: 30px;
`;

export const Button = styled.button`
  background-image: linear-gradient(#ccd7df, #3f3f3f);
  border: 1px solid #2c2e2f;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;

  display: block;

  font-size: 10px;
  font-weight: 400;
  letter-spacing: -0.022em;
  line-height: 1.47059;
  min-width: 30px;
  overflow: visible;
  padding: 4px 5px;
  text-align: center;

  &:hover {
    background-image: linear-gradient(#d53b3b, #850305);
    border-color: #2c2e2f;
    text-decoration: none;
  }

  &:focus {
    box-shadow: rgba(207, 41, 50, 0.5) 0 0 0 3px;
    outline: none;
  }
`;

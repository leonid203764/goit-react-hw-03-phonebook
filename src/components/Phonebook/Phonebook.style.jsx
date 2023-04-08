import styled from 'styled-components';

export const Form = styled.form`
  border: solid 1px black;
  padding: 20px;
  display: flex;
  flex-direction: column;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(20 / 24);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
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
    background-image: linear-gradient(#3d94d9, #0067b9);
    border-color: #2c2e2f;
    text-decoration: none;
  }

  &:focus {
    box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;
    outline: none;
  }
`;

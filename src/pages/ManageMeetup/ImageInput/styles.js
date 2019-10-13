import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  width: 100%;
  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;

      width: 100%;

      border-radius: 4px;

      background: #000;
    }

    input {
      display: none;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 24px;

  a {
    margin-top: 8px;
    display: flex;
    align-items: center;
    text-decoration: none;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      margin-left: 8px;
      font-weight: bold;
    }

    img {
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 24px;
  }
`;

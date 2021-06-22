import styled from 'styled-components';

export const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  

  h1 {
    color: #111112;
    letter-spacing: 8px;
    text-transform: uppercase;
    margin: 0 0 10px;
    
    
  }

  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;

import LatestNews from './LatestNews';
import Socials from './Socials';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
    padding-top: 48px;
`;

const Layout = () => {
  return (
    <StyledDiv>
        <LatestNews />
        <Socials />
    </StyledDiv>
  )
}

export default Layout;

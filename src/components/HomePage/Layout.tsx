import LatestNews from './LatestNews';
import Socials from './Socials';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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

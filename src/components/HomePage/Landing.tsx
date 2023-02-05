import Cover from '../../assets/images/testImages/testImageCover.jpg';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;

    img {
        width: 100%;
    }
`;

const Landing = () => {
  return (
    <StyledDiv>
        <img src={Cover} alt="Cover" />
    </StyledDiv>
  )
}

export default Landing;

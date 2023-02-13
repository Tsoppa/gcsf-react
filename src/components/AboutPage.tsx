import {Box} from '@mui/material';
import GcsfLogoWithMap from '../assets/images/about/gcsfLogoWithGeo.png';
import styled from 'styled-components';
import {BsFacebook, BsTwitch, BsTwitter, BsYoutube} from 'react-icons/bs'

const StyledImg = styled.img`
  width: 760px;
`;

const StyledBox = styled(Box)`
  a {
    color: #797b80;

    :hover {
      color: #db1919;
    }
  }
`;

const AboutPage = () => {
  return (
    <Box display="flex" gap="24px" justifyContent="center" alignItems="center" height="78vh" paddingBottom={12}>
      <Box display="flex" flexDirection="column" gap="12px">
        <h2 style={{fontSize: "36px"}}>About Us</h2>
        <Box display="flex" flexDirection="column" gap="4px" >
          <p>What is Lorem Ipsum?</p>
          <p style={{maxWidth: "600px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        </Box>
        <Box display="flex" flexDirection="column" gap="4px">
          <p>What is Lorem Ipsum?</p>
          <p style={{maxWidth: "600px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        </Box>
        <Box display="flex" flexDirection="column" gap="4px">
          <p>What is Lorem Ipsum?</p>
          <p style={{maxWidth: "600px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        </Box>
        <StyledBox display="flex" justifyContent="center" gap="12px" paddingTop="12px">
          <a href="https://www.facebook.com/gcsf.ge" target="_blank" rel='noopener noreferrer'>
            <BsFacebook fontSize={24} />
          </a>
          <a href="https://twitter.com/gcsf_ge" target="_blank" rel='noopener noreferrer'>
            <BsTwitter fontSize={24} />
          </a>
          <a href="https://www.youtube.com/cybertv" target="_blank" rel='noopener noreferrer'>
            <BsYoutube fontSize={24} />
          </a>
          <a href="https://www.twitch.tv/cybertv_gg" target="_blank" rel='noopener noreferrer'>
            <BsTwitch fontSize={24} />
          </a>
        </StyledBox>
      </Box>
      <Box>
        <StyledImg src={GcsfLogoWithMap} alt="" />
      </Box>
    </Box>
  )
}

export default AboutPage;

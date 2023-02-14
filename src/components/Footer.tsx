import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Box } from '@mui/material';
import Logo from '../assets/images/gcsfLogo.png';

const StyledFooter = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 90px;
    background-color: #e6e8ed;

    @media only screen and (max-width: 768px) {
        height: 60px;
    }

    @media only screen and (max-width: 480px) {
        height: 40px;
    }

    div {
        a {
            img {
                width: 80px;
                
                @media only screen and (max-width: 480px) {
                    width: 70px;
                }
            }
        }
        p {
            @media only screen and (max-width: 480px) {
                font-size: 10px;
            }
        }
    }
`;

const StyledLink = styled(Link)`
    display: flex;
`;

const Footer = () => {
  return (
    <StyledFooter>
        <div>
            <p>&#169; 2023 GCSF, all rights reserved</p>
        </div>
        <Box>
            <StyledLink to="/"><img src={Logo} alt="GCSF" /></StyledLink>
        </Box>
    </StyledFooter>
  )
}

export default Footer;

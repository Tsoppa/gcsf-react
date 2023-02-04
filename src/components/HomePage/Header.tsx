import {Box} from '@mui/material';
import Logo from '../../assets/images/gcsfLogo.png';
import styled from 'styled-components';

const StyledBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;

    nav ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 32px;
        
        li {
            font-size: 24px;
        }
    }

    img {
        width: 120px;
    }
`;

const Header = () => {
    return(
        <StyledBox>
            <a href="/">
                <img src={Logo} alt="GCSF" />
            </a>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </nav>
        </StyledBox>
    )
}

export default Header;

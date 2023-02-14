import {Box} from '@mui/material';
import Logo from '../assets/images/gcsfLogo.png';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    box-shadow: 0 -6px 8px 4px rgba(0,0,0,0.5);

    nav {
        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 32px;
            
            li {
                font-size: 24px;
            }
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
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </nav>
        </StyledBox>
    )
}

export default Header;

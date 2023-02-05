import styled from 'styled-components';
import NewsData from '../../data/partners.json';
import {Box} from '@mui/material';

const StyledGridDiv = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: auto auto auto auto;
    gap: 32px;
    padding-bottom: 48px;

    img {
        width: 200px;
        height: 120px;
        object-fit: contain;
    }
`;

const Partners = () => {
  return (
    <StyledGridDiv>
        {NewsData.map((items, index) => (
            <Box display="flex" flexDirection="column" alignItems="center">
                <a href={items.url} target="_blank" rel="noopener noreferrer" key={index}>
                    <img src={require('../../assets/images/partners/' + items.image)} alt={items.title} />
                </a>
                <p>{items.title}</p>
            </Box>
        ))}
    </StyledGridDiv>
  )
}

export default Partners;

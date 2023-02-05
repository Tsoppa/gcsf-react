import NewsData from '../../data/news.json';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Box, Button, Typography} from '@mui/material';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const StyledGridDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    img {
        width: 400px;
        height: 280px;
        object-fit: contain;
    }
`;

const LatestNews = () => {
  return (
    <StyledDiv>
        <h2>Latest News</h2>
        <StyledGridDiv>
            {NewsData.slice(-6).map((items, index) => (
                <Box key={index} display="flex" flexDirection="column" gap="16px" sx={{boxShadow: 3, borderRadius: "16px", padding: "16px", backgroundColor: "#e6e8ed", maxWidth: "432px"}}>
                    <Box display="flex" flexDirection="column" gap="16px">
                        <img src={require('../../assets/images/testImages/' + items.image)} alt={items.title} />
                        <Typography variant="h5" fontWeight="bold" fontFamily="Montserrat">{items.title}</Typography>
                        <p>{items.shortDescription}</p>
                    </Box>
                    <Link to="/news" target="_blank">
                        <Button variant="outlined">Read More</Button>
                    </Link>
                </Box>
            ))}
        </StyledGridDiv>
    </StyledDiv>
  )
}

export default LatestNews;

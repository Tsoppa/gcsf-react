import NewsData from '../../data/news.json';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Box, Button} from '@mui/material';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
            {NewsData.map((items, index) => (
                <Box key={index} sx={{boxShadow: 3, borderRadius: "16px", padding: "16px"}}>
                    <div>
                        <img src={require('../../assets/images/testImages/' + items.image)} alt={items.title} />
                        <h6>{items.title}</h6>
                        <p>{items.shortDescription}</p>
                    </div>
                    <Link to="/news">
                        <Button variant="outlined">Read More</Button>
                    </Link>
                </Box>
            ))}
        </StyledGridDiv>
    </StyledDiv>
  )
}

export default LatestNews;

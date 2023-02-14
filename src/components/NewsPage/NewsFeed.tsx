import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import styled from 'styled-components';
import NewsData from '../../data/news.json';
import {Link} from 'react-router-dom';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 48px 0;
`;

const StyledGridDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 42px;

    img {
        width: 400px;
        height: 280px;
        object-fit: contain;
    }
`;

const NewsFeed = () => {
  return (
    <StyledDiv>
      <Box display="flex" flexDirection="column" gap={3}>
        <h2>Latest News</h2>
        <StyledGridDiv>
            {NewsData.slice(0).reverse().map((items, index) => (
                <Box key={index} display="flex" flexDirection="column" gap="16px" sx={{boxShadow: 3, borderRadius: "16px", padding: "16px", backgroundColor: "#e6e8ed", maxWidth: "432px"}}>
                    <Box display="flex" flexDirection="column" gap="16px">
                        <img src={require('../../assets/images/testImages/' + items.image)} alt={items.title} />
                        <Typography variant="h5" fontWeight="bold" fontFamily="Montserrat">{items.title}</Typography>
                        <p>{items.shortDescription}</p>
                    </Box>
                    <Link to={`/news/${items.newsUrl}`}>
                        <Button variant="outlined">Read More</Button>
                    </Link>
                </Box>
            ))}
        </StyledGridDiv>
      </Box>
    </StyledDiv>
  )
}

export default NewsFeed;

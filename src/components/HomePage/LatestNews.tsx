import NewsData from '../../data/news.json';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledGridDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const LatestNews = () => {
  return (
    <StyledDiv>
        <h2>Latest News</h2>
        <StyledGridDiv>
            {NewsData.map((items, index) => (
                <div key={index}>
                    <div>
                        <p>{items.title}</p>
                    </div>
                    <button>Read More</button>
                </div>
            ))}
        </StyledGridDiv>
    </StyledDiv>
  )
}

export default LatestNews;

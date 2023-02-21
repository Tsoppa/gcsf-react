import { useParams } from 'react-router-dom';
import NewsData from '../../data/news.json';
import { Box } from '@mui/material';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  h2 {
    font-size: 2rem;
  }

  p {
    white-space: pre-wrap;
    max-width: 720px;

    @media only screen and (max-width: 480px) {
      font-size: 8px;
    }
  }

  img {
    width: 960px;
    height: 540px;
    object-fit: contain;

    @media only screen and (max-width: 900px) {
      width: 640px;
      height: 360px;
    }

    @media only screen and (max-width: 768px) {
      width: 548.5px;
      height: 308.5px;
    }

    @media only screen and (max-width: 480px) {
      width: 384px;
      height: 216px;
    }

    @media only screen and (max-width: 320px) {
      width: 320px;
      height: 180px;
    }
  }

  iframe {
    border-radius: 24px;
    width: 499.2px;
    height: 280.8px;

    @media only screen and (max-width: 480px) {
      width: 345.6px;
      height: 194.4px;
    }
  }
`;

const SingleNews = () => {
  const { id } = useParams<{ id: string }>();
  const item = NewsData.find(item => item.newsUrl === id);

  if (!item) {
    return <div>News not found</div>;
  }

  // in news json if you want to break line and handle paragraph you need to add "\n"

  // \" – double quote
  // \\ – single backslash
  // \a – bell/alert
  // \b – backspace
  // \r – carriage return
  // \n – newline
  // \s – space
  // \t – tab

  return (
    <StyledBox display="flex" flexDirection="column" alignItems="center" padding="48px 0" gap="20px">
      <img src={require('../../assets/images/testImages/' + item.image)} alt="" />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <iframe title="Video" src={"https://www.youtube-nocookie.com/embed/" + item.video} frameBorder="0" allow="fullscreen;" />
    </StyledBox>
  )
}

export default SingleNews;

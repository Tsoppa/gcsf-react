import React from 'react';
import {useParams} from 'react-router-dom';
import NewsData from '../../data/news.json';

const SingleNews = () => {
  const { id } = useParams<{ id: string }>();
  const item = NewsData.find(item => item.newsUrl === id);

  if (!item) {
    return <div>News not found</div>;
  }

  return (
    <div>
      <p>{item.title}</p>
      <p>{item.description}</p>
    </div>
  )
}

export default SingleNews;

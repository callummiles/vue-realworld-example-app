import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../services/api';
import { formatDate } from '../utils/date';

interface ArticleMetaProps {
  article: Article;
}

const ArticleMeta: React.FC<ArticleMetaProps> = ({ article }) => {
  return (
    <div className="article-meta">
      <Link to={`/profile/${article.author.username}`}>
        <img src={article.author.image} alt={article.author.username} />
      </Link>
      <div className="info">
        <Link to={`/profile/${article.author.username}`} className="author">
          {article.author.username}
        </Link>
        <span className="date">{formatDate(article.createdAt)}</span>
      </div>
    </div>
  );
};

export default ArticleMeta;

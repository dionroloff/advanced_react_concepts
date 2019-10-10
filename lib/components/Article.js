import React from 'react';
import styles from './styles-config';

const dateDisplay = (dateString) => {
  return new Date(dateString).toDateString();
}

const Article = (props) => {
  const { article, actions } = props;
  const author = actions.lookupAuthor(article.authorId);

  return (
    <div style={styles.article}>
      <div style={styles.title}>
        { article.title }
      </div>
      <div style={styles.date}>
        { dateDisplay(article.date) }
      </div>
      <div style={styles.author}>
        <a href={author.website} target="_blank">
          { author.firstName } { author.lastName }
        </a>
      </div>
      <div style={styles.body}>
        { article.body }
      </div>
    </div>
  );
};

export default Article;

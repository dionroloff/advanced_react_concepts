import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles-config';
import storeProvider from './storeProvider';

const dateDisplay = (dateString) => {
  return new Date(dateString).toDateString();
}

const Article = (props) => {
  const { article, author } = props;

  return (<div style={styles.article}>
    <div style={styles.title}>
      {article.title}
    </div>
    <div style={styles.date}>
      {dateDisplay(article.date)}
    </div>
    <div style={styles.author}>
      <a href={author.website} target="_blank">
        {author.firstName}
        {author.lastName}
      </a>
    </div>
    <div style={styles.body}>
      {article.body}
    </div>
  </div>);
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string,
  })
};

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId)
  };
}

export default storeProvider(extraProps)(Article);

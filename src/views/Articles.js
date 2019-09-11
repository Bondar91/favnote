import React from 'react';
import PropTypes from 'prop-types';
import GridViewTemplate from 'templates/GridViewTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';

const Articles = ({ articles }) => (
  <GridViewTemplate pageType="articles">
    {articles.map(({ id, title, articleLink, content, created }) => (
      <Card
        id={id}
        cardType="articles"
        title={title}
        articleLink={articleLink}
        content={content}
        created={created}
        key={id}
      />
    ))}
  </GridViewTemplate>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      articleName: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);

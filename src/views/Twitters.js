import React from 'react';
import PropTypes from 'prop-types';
import GridViewTemplate from 'templates/GridViewTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';

const Twitters = ({ twitters }) => (
  <GridViewTemplate pageType="twitters">
    {twitters.map(({ id, title, twitterName, content, created }) => (
      <Card
        id={id}
        cardType="twitters"
        title={title}
        twitterName={twitterName}
        content={content}
        created={created}
        key={id}
      />
    ))}
  </GridViewTemplate>
);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);

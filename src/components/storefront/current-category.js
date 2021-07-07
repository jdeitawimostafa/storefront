import React from 'react';
import { connect } from 'react-redux';

const CurrentCategory = (props) => {
  return props.activeCategory ? <h2>Current Category : {props.activeCategory}</h2> : '';
};

const mapStateToProps = (state) => {
  return {
    activeCategory: state.categories.activeCategory,
  };
};


export default connect(mapStateToProps)(CurrentCategory);
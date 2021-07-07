import React from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/products';
import { Button } from '@material-ui/core';

const Categories = (props) => {
    let categoriesToMap = props.category.categories;
  return (
    <div>
        <ul>
          {categoriesToMap.map((category) => {
            return (
              <Button variant="outlined" key={category.displayName} onClick={() => props.changeActiveCategory(category)}>
                {category.displayName}
              </Button>
            );
          })}
        </ul>
      </div>
  );
};

const mapStateToProps = (state) => {
    return {
      category: state.categories, 
    };
  };
  
  const mapDispatchToProps = { changeActiveCategory };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Categories);

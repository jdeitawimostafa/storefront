import React from 'react';
import { connect } from 'react-redux';
// import { changeActiveCategory } from '../../store/products';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {hitApi} from '../../store/categories';

const Categories = (props) => {
    let categoriesToMap = props.category.categories;
    const dispatch = useDispatch();
  return (
    <div>
        <ul>
          {categoriesToMap.map((category) => {
            return (
              <Button variant="outlined" key={category.displayName} onClick={() => dispatch((hitApi(category.name)))}>
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
  
  // const mapDispatchToProps = { changeActiveCategory };
  
  export default connect(mapStateToProps)(Categories);

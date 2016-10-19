import React from 'react';
import {_visibilityFilter} from '../action-creators/action-creator';

export const FilterLink = ({filter,children,dispatch,currentfilter}) => {
  if(filter === currentfilter){
    return <span className="filters-active">{children}</span>
  }
  return (
    <a href="#" className="filters"
           onClick={e => {
    e.preventDefault();
    dispatch(_visibilityFilter(filter));
    }}>
      {children}</a>
  );
};

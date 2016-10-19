import React from 'react';
import FontAwesome from 'react-fontawesome';

export const Icon = (props) => {
  return (
    <FontAwesome
      name= {props.name}
      size='lg'
      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
    />
  )
};

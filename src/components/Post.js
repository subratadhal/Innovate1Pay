import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

export default ({ post: { id, email, _id }}) => {
  return (
    <div style={ styles }>
      <h2>{ id }</h2>
      <p>{ email }</p>
      
    </div>
  );
};
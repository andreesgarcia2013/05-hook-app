import React from 'react';
export const Small = React.memo(({value}) => {
    console.log('reprint:(');
  return (
    <small>{value}</small>
  )
})

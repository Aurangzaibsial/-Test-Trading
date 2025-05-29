import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>Data from parent: {props.message}</p>
    </div>
  );
}

export default ChildComponent;
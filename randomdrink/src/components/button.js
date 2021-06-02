import React from 'react';

function Button() {
  
  function refreshPage() {
    window.location.reload();
  }
  
  return (
    <div>
      <button className='f3 link grow br4 ph4 pv3 mb5 dib black bg-white' onClick={refreshPage}>Nah, not feeling it!</button>
    </div>
  );
}

export default Button;
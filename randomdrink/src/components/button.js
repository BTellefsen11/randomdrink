import React from 'react';

function Button() {
  
  function refreshPage() {
    window.location.reload();
    window.scrollTo(0, 0);
  }
  
  return (
    <div>
      <button className='f3 link grow br4 ph4 pv3 mb5 dib black bg-white lobster' onClick={refreshPage}>Nah, not feeling it!</button>
    </div>
  );
}

export default Button;
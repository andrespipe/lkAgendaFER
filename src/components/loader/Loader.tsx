import React from 'react';
import './Loader.scss';

const Loader: React.FC = () => (
  <div className="lds-wrapper">
    <div className="lds-animation">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
);

export default Loader;
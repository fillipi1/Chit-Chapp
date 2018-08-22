import React from 'react';
import Panel from '../Components/Panel'
import bodyStyles from './Body.scss';

const Body = ({ children }) => (
  <div>
<Panel />
    <p>

      {children}

    </p>

  </div>

);

export default Body;

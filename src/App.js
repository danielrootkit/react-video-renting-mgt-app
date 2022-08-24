import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <FontAwesomeIcon icon={faCoffee} />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';
import { JsonTest } from '../containers/JsonTest/JsonTest';

export const MainView = () => {
  return (
    <>
      <div className="mb-3">
        <FontAwesomeIcon icon={faGlobeAfrica} />
        &nbsp; Main View
      </div>
      <hr />
      <JsonTest />
    </>
  );
};

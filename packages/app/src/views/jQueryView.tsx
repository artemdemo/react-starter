import React, { useState } from 'react';

export const JQueryView = () => {
  const versionRegex = /(\d+\.\d+\.\d+)/gm;
  // @ts-ignore
  const jQueryVersion = jQuery.fn.jquery;
  const match = versionRegex.exec(jQueryVersion);

  const [version] = useState(match ? match[0] : 'unknown');

  return (
    <>
      <p>JQuery View</p>
      <div data-testid="jQueryVersion">
        {version}
      </div>
    </>
  );
};

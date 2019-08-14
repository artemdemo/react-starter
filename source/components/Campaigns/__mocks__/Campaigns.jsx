import React from 'react';

const Campaigns = ({items}) => (
    <div data-mock='Campaigns'>
        {JSON.stringify({
            items,
        }, null, 2)}
    </div>
);

export default Campaigns;

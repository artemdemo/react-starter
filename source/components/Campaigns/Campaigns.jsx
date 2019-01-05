import React from 'react';
import PropTypes from 'prop-types';

const Campaigns = (props) => {
    return (
        <div className='row'>
            {props.items.map((item, index) => (
                <div
                    className='col-6 col-md-4'
                    key={`campaigns-item-${index}`}
                >
                    <h3>{item.name}</h3>
                    <img
                        src={item.picture}
                        alt={item.name}
                    />
                    <p>
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

Campaigns.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        picture: PropTypes.string,
        description: PropTypes.string,
    })),
};

Campaigns.defaultProps = {
    items: [],
};

export default Campaigns;

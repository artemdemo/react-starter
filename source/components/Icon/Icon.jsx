import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
    const { name } = props;
    if (name) {
        return (
            <span className={`glyphicon glyphicon-${name}`} />
        );
    }

    return null;
};

Icon.propTypes = {
    name: PropTypes.string,
};

Icon.defaultProps = {
    name: null,
};

export default Icon;

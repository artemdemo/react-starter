import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Icon = (props) => {
    const { name, className, style } = props;
    const iconClass = classnames(className, `glyphicon glyphicon-${name}`);
    if (name) {
        return (
            <span
                style={style}
                className={iconClass} />
        );
    }

    return null;
};

Icon.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.shape({}),
};

Icon.defaultProps = {
    name: null,
    className: null,
    style: null,
};

export default Icon;

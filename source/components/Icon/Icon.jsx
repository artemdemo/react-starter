import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Icon.less';

/*
 * Based on font awesome
 *
 * @link https://fontawesome.com/v4.7.0/icons/
 */

const Icon = (props) => {
    const { name, className, style } = props;
    const iconClass = classnames(className, `fa fa-${name}`);
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

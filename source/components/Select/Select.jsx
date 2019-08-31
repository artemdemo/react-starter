import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _get from 'lodash/get';

import './Select.less';

const PLACEHOLDER_VALUE = 'placeholder-12#$';

const Select = (props) => {
    const { className, id, placeholder, disabled, list, onChange, value, large, small } = props;
    const onChangeValue = (e) => {
        onChange(list.find(item => item.value === e.target.value));
    };
    const selectedValue = value && list.find((item) => {
        return item === value;
    });
    const renderPlaceholder = () => {
        if (placeholder) {
            return (
                <option
                    value={PLACEHOLDER_VALUE}
                    disabled
                >
                    {placeholder}
                </option>
            );
        }
        return null;
    };

    return (
        <select
            className={classnames(className, {
                select: true,
                'form-control': true,
                'form-control-lg': large,
                'form-control-sm': small,
            })}
            defaultValue={placeholder && !value ? PLACEHOLDER_VALUE : undefined}
            value={_get(selectedValue, 'value', undefined)}
            onChange={onChange && onChangeValue}
            disabled={disabled}
            id={id}
        >
            {renderPlaceholder()}
            {list.map(item => (
                <option
                    value={item.value}
                    disabled={!item.value || item.disabled}
                    key={`${item.value} - ${item.name}`}
                >
                    {item.name}
                </option>
            ))}
        </select>
    );
};

const valueProp = PropTypes.shape({
    value: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
});

Select.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    list: PropTypes.arrayOf(valueProp),
    value: valueProp,
    onChange: PropTypes.func,
    large: PropTypes.bool,
    small: PropTypes.bool,
};

Select.defaultProps = {
    className: '',
    id: undefined,
    placeholder: undefined,
    disabled: false,
    list: [],
    value: undefined,
    onChange: undefined,
    large: false,
    small: false,
};

export default Select;

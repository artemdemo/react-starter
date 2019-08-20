import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PLACEHOLDER_VALUE = 'placeholder-12#$';

const Select = (props) => {
    const { className, id, placeholder, list, onChange, value, large, small } = props;
    const onChangeValue = (e) => {
        onChange(list.find(item => item.value === e.target.value));
    };
    const selectedValue = value && list.find(item => item === value);
    const renderPlaceholder = () => {
        if (placeholder && !value) {
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
                'form-control': true,
                'form-control-lg': large,
                'form-control-sm': small,
            })}
            defaultValue={placeholder && !value ? PLACEHOLDER_VALUE : undefined}
            value={selectedValue && selectedValue.value}
            onChange={onChange && onChangeValue}
            id={id}
        >
            {renderPlaceholder()}
            {list.map(item => (
                <option
                    value={item.value}
                    disabled={!item.value}
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
});

Select.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
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
    list: [],
    value: undefined,
    onChange: undefined,
    large: false,
    small: false,
};

export default Select;

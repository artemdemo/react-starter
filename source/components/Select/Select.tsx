import React from 'react';
import classnames from 'classnames';
import s from './Select.module.css';

const PLACEHOLDER_VALUE = 'placeholder-12#$';

export enum ESelectSize {
  large,
  small,
}

export type TSelectListItem = {
  value: string;
  name: string;
  disabled?: boolean;
};

type TProps = {
  className: string;
  id: string;
  placeholder: string;
  disabled: boolean;
  list: TSelectListItem[];
  onChange?: (TSelectListItem) => void;
  value: TSelectListItem;
  size?: ESelectSize;
};

export const Select = (props: TProps) => {
  const {className, id, placeholder, disabled, list, onChange, value, size} = props;
  const onChangeValue = (e) => {
    onChange && onChange(list.find(item => item.value === e.target.value));
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
        [s.Select]: true,
        'form-control': true,
        'form-control-lg': size === ESelectSize.large,
        'form-control-sm': size === ESelectSize.small,
      })}
      defaultValue={placeholder && !value ? PLACEHOLDER_VALUE : undefined}
      value={selectedValue?.value}
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

Select.defaultProps = {
  className: '',
  id: undefined,
  placeholder: undefined,
  disabled: false,
  list: [],
  value: undefined,
};

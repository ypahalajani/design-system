import * as React from 'react';
import { OptionTypeProps } from './index';
import Checkbox from '@/components/atoms/checkbox';

const CheckboxOption = (props: OptionTypeProps) => {
  const {
    className,
    selected,
    onChange,
    optionData,
    index,
    updateActiveOption,
  } = props;

  const { label } = optionData;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);
  };

  const onUpdateActiveOption = () => {
    if (updateActiveOption) updateActiveOption(index);
  };

  return (
    <div className={className} onMouseEnter={onUpdateActiveOption}>
      <Checkbox
        label={label}
        checked={selected}
        onChange={onChangeHandler}
        tabIndex={-1}
      />
    </div>
  );
};

export default CheckboxOption;

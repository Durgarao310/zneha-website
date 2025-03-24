/** @format */

import React from 'react';
import { Input } from '@/components/ui/input';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

interface InputControllerProps {
  name: string;
  disabled?: boolean;
  label: string;
  type?: 'text' | 'number' | 'email' | 'password' | 'url' | 'tel';
  control: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rules?: any;
}

const InputController: React.FC<InputControllerProps> = ({
  name,
  label,
  type = 'text',
  control,
  rules,
  disabled = false,
  onChange,
}) => {
  return (
    <FormField
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { onBlur, onChange: controllerOnChange, value },
        fieldState: { error },
      }) => {
        const isRequired = rules?.required;
        return (
          <FormItem>
            <FormLabel htmlFor={name}>
              {label}
              {isRequired && <span> *</span>}
            </FormLabel>
            <FormControl>
              <div className='flex items-center space-x-2'>
                <Input
                  type={type}
                  disabled={disabled}
                  id={name}
                  value={value || ''}
                  onChange={(e) => {
                    const value = e.target.value || '';
                    controllerOnChange(value);
                    onChange && onChange(e);
                  }}
                  onBlur={onBlur}
                />
              </div>
            </FormControl>

            {error && <FormMessage>{error.message}</FormMessage>}
          </FormItem>
        );
      }}
    />
  );
};

export default InputController;

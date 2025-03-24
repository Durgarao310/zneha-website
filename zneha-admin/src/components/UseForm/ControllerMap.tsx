/** @format */

import { Control } from 'react-hook-form';
import InputController from './InputContoller';

const ControllerMap = (props: any) => {
  const { type } = props;
  switch (type) {
    // case 'select':
    //   return <SelectController {...props} />;
    // case 'switch':
    //   return <SwitchController {...props} />;
    case 'text':
    case 'number':
    case 'email':
    case 'password':
    case 'url':
    case 'tel':
      return <InputController {...props} />;
    // case 'tagsinput':
    //   return <TagsInputController {...props} />;
    // case 'checkbox':
    //   return <CheckboxController {...props} />;
    // case 'textarea':
    //   return <TextareaController {...props} />;
    // case 'file':
    //   return <FileController {...props} />;
    // case 'date':
    //   return <DateController {...props} />;
    // case 'radio':
    //   return <RadioController {...props} />;
    default:
      return null;
  }
};

export type FormFieldConfig = {
  name: string;
  label: string;
  type:
    | 'text'
    | 'number'
    | 'email'
    | 'password'
    | 'url'
    | 'select'
    | 'checkbox'
    | 'textarea'
    | 'file'
    | 'date'
    | 'radio'
    | 'tel'
    | 'tagsinput'
    | 'switch';
  disabled?: boolean;
  options?: { value: string; label: string }[];
  noOfFiles?: number;
  accept?: string[];
  rules?: any;
  control: Control<any>;
  hidden?: boolean;
  onChange?: (e: any) => void;
  watch?: any;
  setValue?: (name: string, value: any, options?: any) => void;
  fullWidth?: boolean;
};

export default ControllerMap;

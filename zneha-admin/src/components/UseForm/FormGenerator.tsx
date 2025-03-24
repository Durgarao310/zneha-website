/** @format */
import { Fragment } from 'react';
import ControllerMap from './ControllerMap';

export default function FormGenerator(props: any) {
  return (
    <>
      {props.map((field: any) => {
        const { hidden = false, fullWidth = false } = field;
        return hidden ? null : (
          <Fragment key={field.name}>
            <div className={fullWidth ? 'col-span-2' : ''}>
              <ControllerMap {...field} />
            </div>
          </Fragment>
        );
      })}
    </>
  );
}

import React from 'react';
import './colour.scss';

interface ColourProps {
  id: string;
  color: string;
  name: string;
  border?: string;
}

export const ColourBlock = (props: ColourProps) => {
  return (
    <div className="color-block" key={props.id}>
      <div
        style={{
          backgroundColor: props.color,
          borderColor: props.border ? props.border : 'transparent',
        }}
        className="color-block--box"
      ></div>
      <div className="color-block--text">
        <p>{props.name}</p>
        <p>{props.color}</p>
      </div>
    </div>
  );
};

import React from 'react';

import './typography.scss';

interface TypographyBlockProps {
  type: string;
  weight: string;
}

export const LatoTextBlock = ({
  type,
  weight,
  ...props
}: TypographyBlockProps) => {
  const classType = `lato-text--${type}`;
  const classWeight = `${classType}_${weight}`;
  return (
    <div className={['lato-text', classType, classWeight].join(' ')} {...props}>
      Lato {type ? type.replaceAll('-', ' ') : ''}
    </div>
  );
};

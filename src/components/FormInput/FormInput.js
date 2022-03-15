import React from 'react';

import './FormInput.styles.scss';

const FormInput = ({ handleChange, label, name, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' name={name} onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput; 

// // ${
//   otherProps.value.length ? 'shrink' : ''
// } 
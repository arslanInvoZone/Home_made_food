import React from 'react'
import { TextField } from '@mui/material'
import { ErrorMessage, useField } from 'formik'
function InputField({ width, label, id, margin, type, ...props }) {
  const [field, meta] = useField(props)
  return (
    <>
      <TextField
      error={meta.touched && meta.error && true}
        id={id}
        fullWidth={width}
        label={label}
        margin={margin}
        type={type}
        {...field}
        {...props}
        autoComplete='off'
        helperText={meta.touched && meta.error && <ErrorMessage name={field.name}/>}
      />
    </>
  )
}

export default InputField

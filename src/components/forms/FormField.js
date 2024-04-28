import React from "react";
import { useFormikContext } from "formik";
import FormErrorMessage from "./FormErrorMessage";

/**
 *@breif Display an input group form field
 * @param {String} name Form field name
 * @param {String} placeholder Form field placeholder
 * @param {String} type Form field type
 * @returns {JSX}
 */
const FormField = ({ name, placeholder, type = "text" }) => {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();
  return (
    <div className="form__group">
      <input
        type={type}
        name={name}
        value={values[name]}
        placeholder={placeholder}
        onChange={(e) => setFieldValue(name, e.target.value)}
        onBlur={() => setFieldTouched(name)}
        className="form__input"
        autoComplete="off"
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default FormField;

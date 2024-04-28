import React from "react";
import { useFormikContext } from "formik";

/**
 * @brief A simple submit button
 * @param {String} title -> Title of button
 * @param {Boolean} loading -> Loading spinner
 * @param {Any} otherProps -> Other properties
 * @return {JSX}
 */
const SubmitButton = ({ title, loading, ...props }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <button disabled={loading} type="submit" {...props} onClick={handleSubmit}>
      {title}
    </button>
  );
};

export default SubmitButton;

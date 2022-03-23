import React from "react";
import { useFormikContext } from "formik";

import PinkAppButton from "../PinkAppButton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <PinkAppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;

import React from "react";
import { useFormikContext } from "formik";

import PinkAppButton from "../PinkAppButton";
import { Keyboard } from "react-native";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <PinkAppButton title={title} onPress={handleSubmit} onPress={Keyboard.dismiss} />;
}

export default SubmitButton;

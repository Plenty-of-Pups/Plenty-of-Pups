
import React from "react";
import { useFormikContext } from "formik";

import PinkAppButton from "../PinkAppButton";
import { Keyboard } from "react-native";

function SubmitButton({ title, nextScreen }) {
  const { handleSubmit } = useFormikContext();

  return <PinkAppButton title={title} nextScreen={nextScreen} onPress={Keyboard.dismiss} />;
}

export default SubmitButton;

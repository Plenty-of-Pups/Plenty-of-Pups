import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  breed: Yup.string().required().min(2).label("Breed"),
  gender: Yup.object().required().nullable().label("Gender"),
  weight: Yup.number().required().min(1).label("Weight"),
  //will implement datetimepicker if time permits
  age: Yup.number().required().min(),
});

function NewDogProfileScreen(props) {
  return <div></div>;
}

export default NewDogProfileScreen;

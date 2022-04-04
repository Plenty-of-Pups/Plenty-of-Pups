import React from "react";
import { StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  breed: Yup.string().required().min(2).label("Breed"),
  gender: Yup.object().required().nullable().label("Gender"),
  weight: Yup.number().required().min(1).label("Weight"),
  //will implement datetimepicker if time permits
  age: Yup.number().required().min(),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  { label: "Female", value: 1 },
  { label: "Male", value: 2 },
];

function NewDogProfileScreen(props) {
  return (
    <Screen style={styles.container}>
      <Text style={[styles.text]}>Next, tell us a little about your pup</Text>
      <AppForm
        initialValues={{
          name: "",
          breed: "",
          gender: null,
          weight: "",
          age: "",
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={50} name="name" placeholder="Name" />
        <AppFormField maxLength={50} name="breed" placeholder="Breed" />
        <AppFormField
          keyboardtype="numeric"
          maxLength={3}
          name="weight"
          placeholder="Weight (lb)"
        />
        <AppFormPicker items={categories} name="gender" placeholder="Gender" />
        <AppFormField
          keyboardtype="numeric"
          maxLength={3}
          name="age"
          placeholder="Age (years - if under 1 year old put 1)"
        />
        <SubmitButton title="Continue" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default NewDogProfileScreen;

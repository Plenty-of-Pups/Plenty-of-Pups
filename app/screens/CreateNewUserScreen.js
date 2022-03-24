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
import FormImagePicker from "../components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  gender: Yup.object().required().nullable().label("Gender"),
  age: Yup.number().required().min(18).label("Age"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  { label: "Female", value: 1 },
  { label: "Male", value: 2 },
  { label: "Non-binary", value: 3 },
];

function CreateNewUserScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          name: "",
          email: "",
          password: "",
          gender: null,
          age: "",
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker style={styles.imagecontainer} name="images" />
        <AppFormField
          maxLength={50}
          name="name"
          placeholder="Enter your full name"
        />
        <AppFormField
          keyboardtype="email-address"
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Enter your email address"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          placeholder="Create a password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="passwordConfirmation"
          placeholder="Confirm password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormPicker items={categories} name="gender" placeholder="Gender" />
        <AppFormField
          keyboardtype="numeric"
          maxLength={3}
          name="age"
          placeholder="Enter your age"
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
  imagecontainer: {
    alignSelf: "center",
  },
});

export default CreateNewUserScreen;

import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
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
  gender: Yup.object().required().nullable().label("Gender"),
  age: Yup.number().required().min(18).label("Age"),
  biography: Yup.string().label("Biography"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const genderCategories = [
  { label: "Female", value: 1 },
  { label: "Male", value: 2 },
  { label: "Non-binary", value: 3 },
];

function EditUserProfileScreen() {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <Text style={[styles.text]}>Edit Your Profile</Text>
        <AppForm
          initialValues={{
            name: "",
            gender: null,
            age: "",
            biography: "",
            images: [],
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <FormImagePicker name="images" />
          <AppFormField maxLength={50} name="name" placeholder="Aurora" />
          <AppFormPicker
            items={genderCategories}
            name="gender"
            placeholder="Female"
          />
          <AppFormField
            keyboardtype="numeric"
            maxLength={3}
            name="age"
            placeholder="27"
          />
          <AppFormField
            maxLength={500}
            multiline
            numberOfLines={10}
            name="biography"
            placeholder="Hi! My name is Aurora and I am a busy wedding photographer and dog mom. During my free time, I enjoy going on hikes, swimming at Barton Springs pool, and jogs around Lady Bird Lake."
          />
          <SubmitButton title="Save" />
        </AppForm>
      </ScrollView>
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

export default EditUserProfileScreen;

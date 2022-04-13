import React from "react";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";
import BackNavigation from "../components/BackNavigation";
import colors from "../config/colors";

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

function EditUserProfileScreen(props) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardShouldPersistTaps="always" style={styles.scrollView}>
        <BackNavigation
          title="Edit Your Profile"
          backgroundColor={colors.white}
          rightIconColor={colors.pink}
        />
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
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  scrollView: {
    marginVertical: 50,
  },
});

export default EditUserProfileScreen;

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
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  breed: Yup.string().required().min(2).label("Breed"),
  gender: Yup.object().required().nullable().label("Gender"),
  weight: Yup.number().required().min(1).label("Weight"),
  //will implement datetimepicker if time permits
  age: Yup.number().required().min(),
  neuteredspayed: Yup.object()
    .required()
    .nullable()
    .label("Neutered or Spayed"),
  favoritehobby: Yup.string().label("Favorite Hobby"),
  favoritesnack: Yup.string().label("Favorite snack"),
  biography: Yup.string().label("Biography"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const genderCategories = [
  { label: "Female", value: 1 },
  { label: "Male", value: 2 },
];

const neuteredSpayedStatus = [
  { label: "Yes", value: 1 },
  { label: "No", value: 2 },
];

function EditDogProfileScreen(props) {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <Text style={[styles.text]}>Edit Pet's Profile</Text>
        <AppForm
          initialValues={{
            name: "",
            breed: "",
            gender: null,
            weight: "",
            age: "",
            neuteredspayed: null,
            favoritehobby: "",
            favoritesnack: "",
            biography: "",
            images: [],
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <FormImagePicker name="images" />
          <AppFormField maxLength={50} name="name" placeholder="Peanut" />
          <AppFormPicker
            items={genderCategories}
            name="gender"
            placeholder="Male"
          />
          <AppFormField maxLength={50} name="breed" placeholder="Maltipoo" />
          <AppFormField
            keyboardtype="numeric"
            maxLength={3}
            name="weight"
            placeholder="12"
          />
          <AppFormField
            keyboardtype="numeric"
            maxLength={3}
            name="age"
            placeholder="Age (years - if under 1 year old put 1)"
          />
          <AppFormPicker
            items={neuteredSpayedStatus}
            name="neuteredspayed"
            placeholder="Neutered/Spayed"
          />
          <AppFormField
            maxLength={50}
            name="favoritehobby"
            placeholder="Stealing socks"
          />
          <AppFormField
            maxLength={50}
            name="favoritesnack"
            placeholder="Sweet potato"
          />
          <AppFormField
            maxLength={300}
            multiline
            numberOfLines={5}
            name="biography"
            placeholder="Hi! My name is Peanut and I am 
            looking for a new friend who has
            as much energy as me!"
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
export default EditDogProfileScreen;

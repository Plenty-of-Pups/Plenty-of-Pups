import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TextInput,
} from "react-native";
import * as Yup from "yup";
import { ScrollView } from "react-native-gesture-handler";
import Constants from "expo-constants";

import BackNavigation from "../components/BackNavigation";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ExpandableList from "../components/ExpandableList";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";

import FormImagePicker from "../components/forms/FormImagePicker";
import PinkAppButton from "../components/PinkAppButton";

function FAQScreen(props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.backgroundContainer}
      keyboardVerticalOffset={55}
      paddingTop={Constants.statusBarHeight}
    >
      <BackNavigation title="FAQ" rightIconColor={colors.lightgraybackground} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <ScrollView>
            <ExpandableList />
          </ScrollView>
          <AppText style={styles.text}>
            Still need help? Submit a new question:
          </AppText>

          <AppForm
            initialValues={{
              question: "",
            }}
            onSubmit={(values) => console.log(values)}
          >
            <AppFormField
              maxLength={500}
              multiline
              numberOfLines={10}
              name="Question"
              placeholder="Type your question in here and press the submit button below."
            />
            <Button color={colors.pink} title="Submit" onPress={() => Alert.alert('Message Submited')} />

          </AppForm>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: colors.lightgraybackground,
    flex: 1,
    // paddingHorizontal: 15
  },
  text: {
    fontWeight: "700",
    marginTop: 20,
    fontSize: 17,
    alignSelf: "center",
  },
  inner: {
    flex: 1,
    justifyContent: "space-around",
    alignContent: "center",
  },
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: colors.pink,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "80%",
    alignSelf: "center",
    marginVertical: 40,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  butttonText: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  }
})


export default FAQScreen;

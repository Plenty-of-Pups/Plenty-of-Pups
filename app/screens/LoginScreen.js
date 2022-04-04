import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import ErrorMessage from "../components/forms/ErrorMessage";
import AppText from "../components/AppText";
import PinkAppButton from "../components/PinkAppButton";
import PurpleAppButton from "../components/PurpleAppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import colors from "../config/colors";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (

    <View style={styles.background}>
      <Screen>
        <Image style={styles.logo} source={require("../assets/PofP1.png")} />

        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardtype="email-address"
            name="email"
            //   onBlur={() => setFieldTouched("email")}
            //   onChangeText={handleChange("email")}
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            //   onBlur={() => setFieldTouched("password")}
            //   onChangeText={handleChange("password")}
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <Text style={styles.forgotpassword}>Forgot my password</Text>
          <SubmitButton title="Login" />
        </AppForm>
        <PurpleAppButton title="Register"></PurpleAppButton>
      </Screen>
    </View>

  );
}

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  background: {
    flex: 1,
    backgroundColor: colors.pinkbackground,
  },
  forgotpassword: {
    color: colors.greytext,
    fontSize: 14,
    alignSelf: "center",
  },
});
// function LoginScreen(props) {
//   return (
//     <View style={styles.background}>
//       <View style={styles.logoContainer}>
//         <Image style={styles.logo} source={require("../assets/PofP1.png")} />
//       </View>
//       <AppTextInput placeholder="Email" />
//       <View style={styles.buttonsContainer}>
//         <AppButton title="Login" />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     backgroundColor: "#f8f4f1",
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   logo: {
//     width: 400,
//     height: 400,
//   },
//   logoContainer: {
//     position: "absolute",
//     top: 30,
//   },
//   buttonsContainer: {
//     padding: 20,
//     width: "100%",
//   },
// });

export default LoginScreen;

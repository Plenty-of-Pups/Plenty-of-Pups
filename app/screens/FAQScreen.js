import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { ScrollView } from 'react-native-gesture-handler';


import Screen from '../components/Screen';
import colors from '../config/colors';
import AppText from '../components/AppText';
import BackNavigation from '../components/BackNavigation';
import ExpandableList from '../components/ExpandableList';

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton,
} from "../components/forms";

import FormImagePicker from "../components/forms/FormImagePicker";







function FAQScreen(props) {
    return (
        <View style={styles.backgroundContainer}>

            <Screen>
                <BackNavigation title="FAQ"
                    rightIconColor={colors.lightgraybackground}
                    backgroundColor={colors.lightgraybackground} />
                <ExpandableList />

                <View style={styles.questionContainer}>
                    <AppText style={styles.text}>Still need help? Submit a new question:</AppText>
                </View>
                <View>

                    <AppForm
                        initialValues={{
                            question: ""
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
                        <SubmitButton title="Submit" />
                    </AppForm>
                </View>


            </Screen>

        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "700",
        marginTop: 50,
        fontSize: 17,
        alignSelf: "center"
    },
    container: {

        borderRadius: 15,
        backgroundColor: colors.white,
        marginHorizontal: 15,
        marginVertical: 10
    },
    backgroundContainer: {
        backgroundColor: colors.lightgraybackground,
        flex: 1,
    },
    questionContainer: {
        alignContent: "center"

    }
});

export default FAQScreen;

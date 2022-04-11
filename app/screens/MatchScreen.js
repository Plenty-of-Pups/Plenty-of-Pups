import React from "react";
import { View, StyleSheet, Image, Text, Button } from "react-native";
import Screen from '../components/Screen';
import PurpleAppButton from '../components/PurpleAppButton';
import BackNavigation from '../components/BackNavigation';
import colors from '../config/colors';
import Constants from "expo-constants";


function MatchScreen(props) {
    return (
    <View paddingTop={Constants.statusBarHeight}>
        
        <BackNavigation backgroundColor={colors.white} rightIconColor={colors.white}/>
        <Text style={styles.congratulations}>Congratulations!</Text>
        <Text style={styles.match}>It's a match!</Text>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        
        <Image style={styles.leftprofilepic} source={require("../assets/peanut.png")} />
        <Image style={styles.rightprofilepic} source={require("../assets/shihtzu.png")} />
        
        <Text style={styles.leftname}>Peanut</Text>
        <Text style={styles.rightname}>Bella</Text>
        
        <View marginTop={440}>
            <PurpleAppButton title="Say 'Hi'"></PurpleAppButton>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 750,
        height: 750,
        alignSelf: "center",
        position: "absolute",
        marginTop: 10,
    },
    leftprofilepic: {
        width: 150,
        height: 150,
        alignSelf: "center",
        marginTop: 380,
        borderRadius: 400/2,
        position:"absolute",
        left: 20,
    },
   rightprofilepic: {
        width: 150,
        height: 150,
        alignSelf: "center",
        marginTop: 380,
        borderRadius: 400/2,
        position: "absolute",
        right: 20,
    },
    congratulations: {
        color: colors.black,
        fontSize: 28,
        alignSelf: "center",
        marginTop: 50,
    },
    match: {
        color: colors.greytext,
        fontSize: 20,
        alignSelf: "center",
        marginTop: 0,
    },
    leftname: {
        color: colors.black,
        fontSize: 24,
        alignSelf: "center",
        marginTop: 555,
        position: "absolute",
        left:65,
    },
    rightname: {
        color: colors.black,
        fontSize: 24,
        alignSelf: "center",
        marginTop: 555,
        position: "absolute",
        right:65,
    },
  });
  
  export default MatchScreen;
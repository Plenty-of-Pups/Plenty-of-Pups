import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Constants from "expo-constants";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import AppText from "../components/AppText";
import PurpleAppButton from "../components/PurpleAppButton";
import BackNavigation from "../components/BackNavigation";
import ToggleSwitch from "../components/ToggleSwitch";

const accessibilityItems = [
  {
    title: "Larger Text Size",
    lefticon: {
      name: "format-size",
      backgroundColor: colors.white,
      iconColor: colors.greytext,
    },
  },
  {
    title: "Screen Reader",
    lefticon: {
      name: "cellphone-sound",
      backgroundColor: colors.white,
      iconColor: colors.greytext,
    },
  },
  {
    title: "Notifications",
    lefticon: {
      name: "bell-ring-outline",
      backgroundColor: colors.white,
      iconColor: colors.greytext,
    },
  },
];

const securityItems = [
  {
    title: "Password",
    lefticon: {
      name: "lock-outline",
      backgroundColor: colors.white,
      iconColor: colors.greytext,
    },
    righticon: {
      name: "chevron-right",
      backgroundColor: colors.white,
      iconColor: colors.greytext,
      size: 60,
    },
  },
  {
    title: "Privacy",
    lefticon: {
      name: "monitor-eye",
      backgroundColor: colors.white,
      iconColor: colors.greytext,
    },
    righticon: {
      name: "chevron-right",
      backgroundColor: colors.white,
      iconColor: colors.greytext,
      size: 60,
    },
  },
];

const help = [
  {
    title: "FAQ",
    screen: "FAQScreen",
    lefticon: {
      name: "information-outline",
      backgroundColor: colors.white,
      iconColor: colors.greytext,
    },
    righticon: {
      name: "chevron-right",
      backgroundColor: colors.white,
      iconColor: colors.greytext,
      size: 60,
    },
  },
];

const account = [
  {
    title: "Upgrade to Premium",
    screen: "PremiumScreen",
    lefticon: {
      name: "diamond-stone",
      backgroundColor: colors.white,
      iconColor: colors.greytext,
    },
    righticon: {
      name: "chevron-right",
      backgroundColor: colors.white,
      iconColor: colors.greytext,
      size: 60,
    },
  },
];

function SettingScreen(props) {
  return (
    <View paddingTop={Constants.statusBarHeight}>
      <BackNavigation
        title="Settings"
        rightIconColor={colors.beigebackground}
      />

      <View style={styles.container}>
        <AppText style={styles.title}>Accessibility</AppText>
        <FlatList
          data={accessibilityItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              leftIconComponent={
                <Icon
                  name={item.lefticon.name}
                  backgroundColor={item.lefticon.backgroundColor}
                  iconColor={item.lefticon.iconColor}
                />
              }
              rightIconComponent={<ToggleSwitch />}
            />
          )}
        />
      </View>

      <View style={styles.container}>
        <AppText style={styles.title}>Security</AppText>
        <FlatList
          data={securityItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              leftIconComponent={
                <Icon
                  name={item.lefticon.name}
                  backgroundColor={item.lefticon.backgroundColor}
                  iconColor={item.lefticon.iconColor}
                />
              }
              rightIconComponent={
                <Icon
                  name={item.righticon.name}
                  backgroundColor={item.righticon.backgroundColor}
                  iconColor={item.righticon.iconColor}
                  size={item.righticon.size}
                />
              }
            />
          )}
        />
      </View>

      <View style={styles.container}>
        <AppText style={styles.title}>Help</AppText>
        <FlatList
          data={help}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              nextScreen={item.screen}
              title={item.title}
              leftIconComponent={
                <Icon
                  name={item.lefticon.name}
                  backgroundColor={item.lefticon.backgroundColor}
                  iconColor={item.lefticon.iconColor}
                />
              }
              rightIconComponent={
                <Icon
                  name={item.righticon.name}
                  backgroundColor={item.righticon.backgroundColor}
                  iconColor={item.righticon.iconColor}
                  size={item.righticon.size}
                />
              }
            />
          )}
        />
      </View>

      <View style={styles.container}>
        <AppText style={styles.title}>Account</AppText>
        <FlatList
          data={account}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              nextScreen={item.screen}
              leftIconComponent={
                <Icon
                  name={item.lefticon.name}
                  backgroundColor={item.lefticon.backgroundColor}
                  iconColor={item.lefticon.iconColor}
                />
              }
              rightIconComponent={
                <Icon
                  name={item.righticon.name}
                  backgroundColor={item.righticon.backgroundColor}
                  iconColor={item.righticon.iconColor}
                  size={item.righticon.size}
                />
              }
            />
          )}
        />
      </View>
      <View paddingTop={30}>
        <PurpleAppButton
          title="Log Out"
          nextScreen={"LoginScreen"}
        ></PurpleAppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    backgroundColor: colors.white,
    marginHorizontal: 15,
    marginVertical: 10,
    paddingTop: 10,
  },
  backgroundContainer: {
    backgroundColor: colors.lightgraybackground,
    flex: 1,
  },
  title: {
    paddingTop: 5,
    paddingLeft: 20,
    fontWeight: "700",
  },
});

export default SettingScreen;

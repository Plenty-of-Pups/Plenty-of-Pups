import React from "react";
import styles from "../assets/styles";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Demo from "../assets/data/demo.js";
import { useNavigation } from "@react-navigation/core";

const YourProfileItem = (
  { age, info1, location, name, dog, dogImage } = Demo[7]
) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("YourDogScreen", { dog });
  };
  return (
    <View style={styles.containerProfileItem}>
      <Text style={styles.name}>
        {name}, {age}
      </Text>
      <Text style={styles.descriptionProfileItem}>0 miles away</Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#D8D8D8" }} />
      </View>

      <View style={styles.dogInfo}>
        <Text style={styles.bioContent}>Bio: </Text>
      </View>
      <Text style={styles.infoContent}>{info1}</Text>

      <View style={styles.info}>
        <Text style={styles.iconProfile}></Text>
      </View>

      <View style={styles.dogInfo}>
        <Text style={styles.bioContent}>My pup </Text>
      </View>
      <View style={styles.pupInfo}>
        <TouchableOpacity onPress={onPress}>
          <Image source={dogImage} style={styles.circle}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.dogNameInfo}>
        <Text style={styles.dogName}>{dog}</Text>
      </View>
    </View>
  );
};

export default YourProfileItem;

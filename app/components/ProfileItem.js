import React from 'react';
import styles from '../assets/styles';

import { Text, View } from 'react-native';
import Icon from './Icon';

const ProfileItem = ({
  age,
  info1,
  info2,
  info3,
  info4,
  location,
  matches,
  name
}) => {
  return (
    <View style={styles.containerProfileItem}>

      <Text style={styles.name}>{name}, {age}</Text>

      <Text style={styles.descriptionProfileItem}>
        {location}
      </Text>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
        </Text>
        <Text style={styles.infoContent}>{info1}</Text>
      </View>

    </View>
  );
};

export default ProfileItem;

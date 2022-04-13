import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


function DiscoveryTabScreen(props) {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://www.petmd.com/sites/default/files/2020-11/picture-of-shih-tzu-dog.jpg',
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  card: {
    width: '95%',
    height: '60%',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  }
});

export default DiscoveryTabScreen;
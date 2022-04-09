import React from 'react';
import styles from '../assets/styles';
import { Text, View, Image} from 'react-native';
import Demo from '../assets/data/demo.js';
const ProfileItem = ({
  age,
  image,
  info1,
  breed,
  dogName,
  size,
  neutered,
  hobby,
  snack,
  gender
}=Demo[1]) => {
  return (
    <View style={styles.containerProfileItem}>
      
      <Text style={styles.name}>{dogName}</Text>
      <Image source ={gender} style={styles.genderIcon}></Image>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: '#D8D8D8'}} />
        </View>
      
      <View style={styles.info}>
        <Text style={styles.iconProfile}></Text>
      </View>

      <View style={styles.dogInfo}>
      <Text style={styles.dogContent}>Breed: </Text>
      <Text style={styles.dogInfoContent}>{breed}</Text>
      </View>

      <View style={styles.dogInfo}>
      <Text style={styles.dogContent}>Age: </Text>
      <Text style={styles.dogInfoContent}>{age}</Text>
      </View>

      <View style={styles.dogInfo}>
      <Text style={styles.dogContent}>Size: </Text>
      <Text style={styles.dogInfoContent}>{size} lb</Text>
      </View>

      <View style={styles.dogInfo}>
      <Text style={styles.dogContent}>Neutered/Spayed: </Text>
      <Text style={styles.dogInfoContent}>{neutered}</Text>
      </View>
      
      <View style={styles.dogInfo}>
      <Text style={styles.dogContent}>Favorite Hobby: </Text>
      <Text style={styles.dogInfoContent}>{hobby}</Text>
      </View>

      <View style={styles.dogInfo}>
      <Text style={styles.dogContent}>Favorite Snack: </Text>
      <Text style={styles.dogInfoContent}>{snack}</Text>
      </View>

      <View style={styles.dogInfo}>
      <Text style={styles.dogContent}>About me: </Text>
      </View>
      <Text style={styles.dogInfoContent}>{info1}</Text>
      
    </View>
  );
};

export default ProfileItem;

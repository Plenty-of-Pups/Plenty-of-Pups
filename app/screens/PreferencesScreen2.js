import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet , TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { boolean } from 'yup';
import { Touchable } from 'react-native-web';




const PreferencesScreen2 = () => {
const [sliderValue, setSliderValue] = useState(50);

  return (
    <View style={styles.background}>

        <View style={styles.container}>
          <Text style={styles.header}>Match Preferences</Text>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity>
          <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Distance</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
           <View style={{flex: 1, height: 2, backgroundColor: '#D8D8D8'}} />
          </View>
        </View>
        <View style={styles.section}>
        <Text style={styles.title}>Gender</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
           <View style={{flex: 1, height: 2, backgroundColor: '#D8D8D8'}} />
          </View>
        </View>

        
     
      

        </View>
  );
};

const styles = StyleSheet.create({

  background: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
    
  container: {
    paddingVertical: 30,
		alignItems: "center"
  },

  rowContainer: {
    flexDirection: 'row',
    marginTop: -50,
    paddingBottom: 20
  },

  backText: {
    color: colors.pink,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  saveText: {
    color: colors.pink,
    fontWeight: 'bold',
    paddingLeft: 270,
  },

  header: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },

  title: {
    color: 'black',
    fontSize: 18, 
  },

  section: {
    paddingVertical: 30,
    color: '#302C2C',
    fontSize: 18,
    textAlign: 'left',
    direction: 'ltr'
  },

});

export default PreferencesScreen2;
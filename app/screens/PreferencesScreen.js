import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet , TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import colors from '../config/colors';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { boolean } from 'yup';
import NumericInput from 'react-native-numeric-input';




const PreferencesScreen = () => {
const[sliderValue, setSliderValue] = useState(50);

  return (
    <ScrollView style={styles.background}>

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

        <View style={styles.section}></View>

        <View style={styles.section}>
          <Text style={styles.title}>Distance</Text>
          <Text style={styles.title2}>{sliderValue} mi</Text>
          <Slider 
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#F17C87"
          maximumTrackTintColor="#EBEBEB"
          step={1}
          value={sliderValue}
          onValueChange={(sliderValue) => setSliderValue(sliderValue)}
        />
          <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 15}}>
           <View style={{flex: 1, height: 2, backgroundColor: '#D8D8D8'}} />
          </View>
        </View>

        <View style={styles.section}>
        <Text style={styles.title}>Dog Gender</Text>
        <View style={{flexDirection: 'row', paddingBottom: 20, justifyContent: 'space-around'}}>
        <BouncyCheckbox
            size={25}
            fillColor="#F17C87"
            unfillColor="#FFFFFF"
            text="Female"
            iconStyle={{ borderColor: "#F17C87" }}
            onPress={(isChecked = boolean) => {}}
          />
          <BouncyCheckbox
            size={25}
            fillColor="#F17C87"
            unfillColor="#FFFFFF"
            text="Male"
            iconStyle={{ borderColor: "#F17C87" }}
            onPress={(isChecked = boolean) => {}}
          />
        </View>
      
          <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 15}}>
           <View style={{flex: 1, height: 2, backgroundColor: '#D8D8D8'}} />
          </View>
        </View>

        <View style={styles.section}>
        <Text style={styles.title}>Dog Size (lb)</Text>
        <View style={{flexDirection: 'row', paddingBottom: 20, justifyContent: 'space-around'}}>
        <Text style={styles.title3}>From</Text>
        <NumericInput 
            value={0} 
            onChange={value => ({value})} 
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={120} 
            totalHeight={40} 
            step={1}
            valueType='real'
            rounded 
            textColor='#F17C87' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
            <Text style={styles.title3}>to</Text>
            <NumericInput 
            value={0} 
            onChange={value => ({value})} 
            totalWidth={120} 
            totalHeight={40} 
            step={1}
            valueType='real'
            rounded 
            textColor='#F17C87' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 15}}>
           <View style={{flex: 1, height: 2, backgroundColor: '#D8D8D8'}} />
          </View>
        </View>

        <View style={styles.section}>
        <Text style={styles.title}>Dog Age (Years)</Text>
        <View style={{flexDirection: 'row', paddingBottom: 20, justifyContent: 'space-around'}}>
        <Text style={styles.title3}>From</Text>
        <NumericInput 
            value={0} 
            onChange={value => ({value})} 
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={120} 
            totalHeight={40} 
            step={1}
            valueType='real'
            rounded 
            textColor='#F17C87' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
            <Text style={styles.title3}>to</Text>
            <NumericInput 
            value={0} 
            onChange={value => ({value})} 
            totalWidth={120} 
            totalHeight={40} 
            step={1}
            valueType='real'
            rounded 
            textColor='#F17C87' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 15}}>
           <View style={{flex: 1, height: 2, backgroundColor: '#D8D8D8'}} />
          </View>
        </View>

        <View style={styles.section}>
        <Text style={styles.title}>Neutered/Spayed</Text>
        <View style={{flexDirection: 'row', paddingBottom: 20, justifyContent: 'space-around'}}>
        <BouncyCheckbox
            size={25}
            fillColor="#F17C87"
            unfillColor="#FFFFFF"
            text="Yes"
            iconStyle={{ borderColor: "#F17C87" }}
            onPress={(isChecked = boolean) => {}}
          />
          <BouncyCheckbox
            size={25}
            fillColor="#F17C87"
            unfillColor="#FFFFFF"
            text="No"
            iconStyle={{ borderColor: "#F17C87" }}
            onPress={(isChecked = boolean) => {}}
          />
        </View>
          <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 15}}>
           <View style={{flex: 1, height: 2, backgroundColor: '#D8D8D8'}} />
          </View>
        </View>

        <View style={styles.section}>
        <Text style={styles.title}>User Gender</Text>
        <View style={{flexDirection: 'row', paddingBottom: 20, justifyContent: 'space-around'}}>
        <BouncyCheckbox
            size={25}
            fillColor="#F17C87"
            unfillColor="#FFFFFF"
            text="Female"
            iconStyle={{ borderColor: "#F17C87" }}
            onPress={(isChecked = boolean) => {}}
          />
          <BouncyCheckbox
            size={25}
            fillColor="#F17C87"
            unfillColor="#FFFFFF"
            text="Male"
            iconStyle={{ borderColor: "#F17C87" }}
            onPress={(isChecked = boolean) => {}}
          />
          <BouncyCheckbox
            size={25}
            fillColor="#F17C87"
            unfillColor="#FFFFFF"
            text="Non-Binary"
            iconStyle={{ borderColor: "#F17C87" }}
            onPress={(isChecked = boolean) => {}}
          />
        </View>
          <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 15}}>
           <View style={{flex: 1, height: 2, backgroundColor: '#D8D8D8'}} />
          </View>
        </View>

        <View style={styles.section}>
        <Text style={styles.title}>User Age (Years)</Text>
        <View style={{flexDirection: 'row', paddingBottom: 20, justifyContent: 'space-around'}}>
        <Text style={styles.title3}>From</Text>
        <NumericInput 
            value={0} 
            onChange={value => ({value})} 
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={120} 
            totalHeight={40} 
            step={1}
            valueType='real'
            rounded 
            textColor='#F17C87' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
            <Text style={styles.title3}>to</Text>
            <NumericInput 
            value={0} 
            onChange={value => ({value})} 
            totalWidth={120} 
            totalHeight={40} 
            step={1}
            valueType='real'
            rounded 
            textColor='#F17C87' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
           <View style={{flex: 1, height: 2, backgroundColor: '#D8D8D8'}} />
          </View>
        </View>

        </ScrollView>
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
    fontWeight: '400',
    paddingBottom: 20
  },

  title2: {
    color: '#8C8C8C',
    fontSize: 18, 
    fontWeight: '400',
    paddingLeft: 310,
    marginTop: -40
  },

  section: {
    paddingVertical: 10,
    color: '#302C2C',
    fontSize: 18,
    textAlign: 'left',
    direction: 'ltr'
  },
  title3: {
    color: 'black',
    fontSize: 18, 
    fontWeight: '400',
    paddingVertical: 10
  },

});

export default PreferencesScreen;
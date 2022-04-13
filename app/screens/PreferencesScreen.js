import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet , TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import colors from '../config/colors';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { boolean } from 'yup';
import NumericInput from 'react-native-numeric-input';


const Checkbox = ({ onValueChange, selected }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onValueChange}
    style={styles.checkbox}>
    {selected && <Text style={styles.checkmark}>✓</Text>}
  </TouchableOpacity>
);

const PreferencesScreen = () => {
const[sliderValue, setSliderValue] = useState(50);
const [isSelected, setSelected] = useState(false);
const [isSelected2, setSelected2] = useState(false);
const [isSelected3, setSelected3] = useState(false);
const [isSelected4, setSelected4] = useState(false);
const toggleCheckbox = () => setSelected(!isSelected);
const toggleCheckbox2 = () => setSelected2(!isSelected2);
const toggleCheckbox3 = () => setSelected3(!isSelected3);
const toggleCheckbox4 = () => setSelected4(!isSelected4);

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
        <View style={{flexDirection: 'row', paddingBottom: 10, justifyContent: 'space-around'}}>

        
        <Checkbox onValueChange={toggleCheckbox} selected={isSelected} />
        <TouchableOpacity activeOpacity={0.8} onPress={toggleCheckbox}>
        <Text style={styles.label}>{'Female'}</Text>
        </TouchableOpacity>
        <Checkbox onValueChange={toggleCheckbox2} selected={isSelected2} />
        <TouchableOpacity activeOpacity={0.8} onPress={toggleCheckbox2}>
        <Text style={styles.label}>{'Male'}</Text>
        </TouchableOpacity>
       

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

        <Checkbox onValueChange={toggleCheckbox3} selected={isSelected3} />
        <TouchableOpacity activeOpacity={0.8} onPress={toggleCheckbox3}>
        <Text style={styles.label}>{'Yes'}</Text>
        </TouchableOpacity>
        <Checkbox onValueChange={toggleCheckbox4} selected={isSelected4} />
        <TouchableOpacity activeOpacity={0.8} onPress={toggleCheckbox4}>
        <Text style={styles.label}>{'No'}</Text>
        </TouchableOpacity>

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
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },

  checkbox: {
    width: 25,
    height: 25,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#F17C87',
    borderRadius: 25 / 3,
  },

  checkmark: {
    textAlign: 'center',
    alignSelf: 'center',
    color: "#F17C87",
    fontSize: 18,
  },

  label: {
    
    fontSize: 16,
    color: "#8C8C8C",
  },

});

export default PreferencesScreen;
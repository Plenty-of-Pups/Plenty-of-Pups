import React from "react";
import { View, StyleSheet, Image, Text } from 'react-native';


import ListItemSeparator from '../components/ListItemSeparator';
import colors from '../config/colors';






function PicIcon({ image, name }) {
    return (

                <View style={styles.container}>
                    <Image style={styles.image} source={image} />
                    
                </View>
                

               
          
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        marginVertical: 10,
        borderColor: colors.greytext
     },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center'
    },
     image: {
       width: 70,
       height: 70,
       borderRadius: 35,
      marginRight: 10,
    },
    message: {
        color: colors.greytext,
    },
    name: {
        fontSize: 18,
        color: colors.black,
        fontWeight: "600",
        marginBottom: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',      
    },
    text: {
        color: colors.greytext,
    }
    

});



export default PicIcon;
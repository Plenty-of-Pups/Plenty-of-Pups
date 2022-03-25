import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TouchableHighlight } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';


function MessageItem({ title, subTitle, image, ImageComponent, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>

            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>

                <View style={styles.container}>
                    {ImageComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>

                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        flexDirection: "row",
        padding: 15,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.greytext,
    },
    title: {
        fontWeight: "600",
    },

});



export default MessageItem;
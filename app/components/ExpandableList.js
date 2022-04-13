import React, { useState, useEffect } from "react";
import {
    SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableOpacity, LayoutAnimation
} from 'react-native'
import colors from "../config/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from "./Icon";


const CONTENT = [
    {
        isExpanded: false,
        category_name: 'What is the minimum age I have to be to use Plenty of Pups?',
        subCategory: [
            { id: 1, val: 'You must be at least 18 years old' },

        ]
    },
    {
        isExpanded: false,
        category_name: 'How do I add additional dogs to my account?',
        subCategory: [
            { id: 3, val: 'This premium feature has not yet been released.' },

        ]
    },
    {
        isExpanded: false,
        category_name: 'Am I able to change my DOB or age?',
        subCategory: [
            { id: 5, val: 'Answer goes here' }
        ]
    },
    {
        isExpanded: false,
        category_name: 'Is Plenty of Pups free to use or does it require membership?',
        subCategory: [
            { id: 6, val: 'Answer goes here' }
        ]
    },
    {
        isExpanded: false,
        category_name: 'How do I unmatch someone?',
        subCategory: [
            { id: 7, val: 'Answer goes here' }
        ]
    },
    {
        isExpanded: false,
        category_name: 'How do match with someone',
        subCategory: [
            { id: 8, val: 'Answer goes here' },

        ]
    },
];

const ExpandableComponent = ({ item, onClickFunction }) => {
    const [layoutHeight, setlayoutHeight, rightChevron] = useState(0);

    useEffect(() => {
        if (item.isExpanded) {
            setlayoutHeight(null);


        } else {
            setlayoutHeight(0);
        }

    }, [item.isExpanded])

    return (
        <View >
            <TouchableOpacity
                style={styles.item}
                onPress={onClickFunction}
            >
                <Text style={styles.itemText}>
                    {item.category_name}
                </Text>

                {item.isExpanded && <MaterialCommunityIcons name="chevron-up" justifyContent="center" color={colors.pink} marginRight={50} size={35} />}
                {!item.isExpanded && <MaterialCommunityIcons name="chevron-down" color={colors.purple} marginRight={50} size={35} />}



            </TouchableOpacity>


            <View
                style={{
                    height: layoutHeight,
                    overflow: "hidden"
                }}
            >
                {
                    item.subCategory.map((item, key) => (
                        <TouchableOpacity
                            key={key}
                            style={styles.content}
                        >
                            <Text style={styles.text}>
                                {key + 1}. {item.val}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View >
    )
}

const ExpandableList = () => {
    const [multiSelect] = useState(false);
    const [listDataSource, setlistDataSource] = useState(CONTENT);

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        if (multiSelect) {
            array[index]['isExpanded'] = !array[index]['isExpanded'];
        } else {
            array.map((value, placeindex) =>
                placeindex === index
                    ? (array[placeindex]["isExpanded"]) = !array[placeindex]["isExpanded"]
                    : (array[placeindex]["isExpanded"]) = false
            );
        }
        setlistDataSource(array)
    }

    return (

        <View>
            {
                listDataSource.map((item, key) => (
                    <ExpandableComponent
                        key={item.category_name}
                        item={item}

                        onClickFunction={() => {
                            updateLayout(key)
                        }}
                    />
                ))
            }
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: "row",
        //  alignItems: "center",
        // height: 55,
        // padding: 10,
    },
    content: {
        backgroundColor: colors.white,
        padding: 5,
        width: 350,
        alignSelf: "center"
    },
    header: {
        flexDirection: 'row',
        padding: 10
    },
    headerButton: {
        textAlign: "center",
        justifyContent: "center",
        fontSize: 18
    },
    item: {

        flexDirection: "row",
        backgroundColor: colors.white,
        padding: 15,
        marginTop: 15,
        width: 350,
        alignSelf: "center",

    },
    itemText: {
        width: 285,
        fontSize: 16,
        fontWeight: '500',
        paddingRight: 50,

    },
    text: {
        fontSize: 16,
        padding: 10
    },


});

export default ExpandableList;
import React, { useState } from "react";
import {
    View,
    TextInput,
    KeyboardAvoidingView,
    StyleSheet,
    Pressable,
    Platform
} from 'react-native'
import colors from "../config/colors";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";


const MessageInput = () => {

    const [message, setMessage] = useState('');
    const sendMessage = () => {
        //send message
        console.warn("sending: ", message)
        setMessage('');
    }
    const onSendPressed = () => {
        console.warn("Send pressed");
    }
    const onPress = () => {
        if (message) {
            sendMessage();
        } else {
            onSendPressed();
        }
    }




    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.root}
            keyboardVerticalOffset={50}
        >
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={message}
                    placeholder='Type a message...'
                    onChangeText={setMessage}
                />
                <Pressable onPress={onPress} style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        {message ? <Feather name="send" size={24} color={colors.pink} /> : <Feather name="send" size={24} color={colors.messageGray} />}
                    </TouchableOpacity>
                </Pressable>
            </View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    inputContainer: {
        backgroundColor: colors.light,
        borderRadius: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        maxWidth: '90%',
        shadowColor: colors.greytext,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 8,
        marginVertical: 10,
        padding: 10
    },
    input: {
        flex: 1,
    },
    buttonContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: "center",

    }
})

export default MessageInput
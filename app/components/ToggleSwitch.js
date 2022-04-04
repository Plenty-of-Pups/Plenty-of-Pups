import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import colors from "../config/colors";

const ToggleSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: colors.black, true: colors.pink }}
                thumbColor={isEnabled ? colors.white : colors.white}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default ToggleSwitch;
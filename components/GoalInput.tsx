import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal, GestureResponderEvent, Image, TouchableOpacity, Text } from 'react-native'

type GoalType = {
    onCancel: ((event: GestureResponderEvent) => void) | undefined;
    visible: boolean | undefined;
    onAddGoal: (arg0: string) => void;
};

export default function GoalInput(props: GoalType): JSX.Element {

    const [enteredGoalText, setEnteredGoalText] = useState<string>("");

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require("../assets/images/goal.png")} />
                <TextInput style={styles.textInput}
                    placeholder="Your Course Goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.buttonStyle, {backgroundColor : "#51ff00"}]} onPress={addGoalHandler}>
                        <Text style={styles.buttonText}>Add Goal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonStyle, {backgroundColor : "#ff0000"}]} onPress={props.onCancel}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};




const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#000000"
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#cccccc",
        width: "100%",
        padding: 16,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 30,
    },

    image: {
        width: 300,
        height: 300,
        margin: 20.
    },
    buttonStyle: {
        width: 160,
        marginHorizontal: 8,
        borderRadius: 8,
        padding : 14,
    },

    buttonText : {
        color: "#000000",
        textAlign: "center",
        fontWeight : "bold",
    },
})
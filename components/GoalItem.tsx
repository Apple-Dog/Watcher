import { StyleSheet, Text, View, Pressable, Platform } from 'react-native'

type goalText = {
    onDeleteItem: (id: string) => void;
    id: string;
    text: string;
};

export default function GoalItem(this: any, props: goalText): JSX.Element {
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={styles.rippleColorAndroid} 
                       onPress={props.onDeleteItem.bind(this, props.id)}
                       style={({pressed})=> pressed && styles.rippleColorIos}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({

    goalItem: {
        margin: 8,
        borderRadius: 8,
        backgroundColor: "rgba(126, 28, 113, 0.982)",
    },
    goalText: {
        color: "#ffffff",
        fontSize: 12,
        padding: 12,
    },
    rippleColorAndroid: {
        color: "rgba(194, 73, 177, 0.982)",
        borderless: true,
    },
    rippleColorIos: {
        opacity : Platform.OS === 'ios' ? 0.5 : 1,
    },
});
// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState<string | null>(null);
  const [courseGoals, setCourseGoals] = useState<Array<string | null>>([]);

  const goalInputHandler = (enteredText:string) =>{

    setEnteredGoalText(enteredText);

  };

  const addGoalHandler = () =>{

      setCourseGoals((currentCourseGoals) => [...currentCourseGoals,enteredGoalText]);

  };


  return (
      <SafeAreaView style={styles.appContainer}>

        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Your Course Goal" onChangeText={goalInputHandler}/>
          <Button title="Add Goal" onPress={addGoalHandler}/>
        </View>
        
        <View style={styles.goalsContainer}>
          {courseGoals.map((goal,index) => <Text key={index}>{goal}</Text>)}
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({

    appContainer : {
      padding : 50,
      paddingHorizontal : 28,
      flex : 1,
      flexDirection : "column",
      backgroundColor : "#000000", 
    },
    inputContainer:{
      flex : 1,
      flexDirection : "row",
      justifyContent : "space-between",
      alignItems : "center",
      marginBottom : 24,
      borderBottomWidth : 1,
      borderBottomColor : "#cccccc",
    },
    textInput : {
        borderWidth : 1,
        borderColor : "#cccccc",
        width : "70%",
        marginRight : 8,
        padding : 8,
    },
    goalsContainer : {
      flex : 5,
    },
});
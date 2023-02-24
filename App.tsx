import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, View, FlatList, TouchableOpacity, Text } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

interface CourseGoals {
  id: string;
  text: string;
};

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  const [courseGoals, setCourseGoals] = useState<Array<CourseGoals>>([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText: string) => {

    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }]);

    endAddGoalHandler();
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };


  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.appContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={startAddGoalHandler}>
          <Text style={styles.buttonText}>Add Goal</Text>
        </TouchableOpacity>
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />
          }}
            keyExtractor={item => item.id}
            alwaysBounceVertical={false} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

  appContainer: {
    padding: 50,
    paddingHorizontal: 28,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000000",
  },

  goalsContainer: {
    flex: 5,
    backgroundColor: "#000000",
    marginTop: 40,
  },

  buttonStyle: {
    backgroundColor: '#7e1c71',
    padding: 14,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

});
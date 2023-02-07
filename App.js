import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.addNewGoal}>
          <Button
            title="Add New Goal"
            color="#527cdf"
            onPress={startAddGoalHandler}
          />
        </View>
        <View></View>
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onClose={endAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
    backgroundColor: " #1b299a",
  },
  addNewGoal: {
    padding: 10,
    marginBottom:1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    alignItems: "center",
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 9,
  },
  goalsContainer: {
    flex: 5,
  },
});
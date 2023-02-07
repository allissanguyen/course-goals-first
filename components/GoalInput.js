import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Modal,
    Image,
  } from "react-native";
  import { useState } from "react";

  function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
      setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText("");
    }

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/images/goal.png")}
            style={styles.image}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Your Course Goals"
            placeholderTextColor="#3448cc"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Close" onPress={props.onClose} color='#f31282'/>
            </View>
            <View style={styles.button}>
              <Button title="Add Goal" onPress={addGoalHandler} color='#527cdf'/>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  export default GoalInput;

  const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
      backgroundColor: "white"
    },
    image: {
      width: 100,
      height: 100,
      margin: 20,
      tintColor: "#527cdf"
    },
    textInput: {
      borderWidth: 1,
      alignItems: "center",
      borderColor: "#a8bbe7",
      backgroundColor:'#a8bbe7',
      color: "#3448cc",
      borderRadius: 6,
      width: "80%",
      padding: 16,
      placeholder: "#3448cc",
    },
    buttonContainer: {
      marginTop: 16,
      flexDirection: "row",
    },
    button: {
      width: "30%",
      marginHorizontal: 8,
    },
  });
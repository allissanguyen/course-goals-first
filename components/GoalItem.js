import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "white" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;
const styles = StyleSheet.create({
  goalItems: {
    margin: 10,
    backgroundColor: "#3448cc",
    borderRadius: 6,
  },
  pressedItem: {
    opacity: .5
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
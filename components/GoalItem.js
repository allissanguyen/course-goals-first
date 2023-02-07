import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
    return (
    <View style={styles.goalItems}>
        <Text style={styles.goalText}>{props.text}</Text>
    </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItems: {
    padding: 10,
    margin: 10,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
},
    goalText: {
    color: "white",
},
    test: {
    color: "black"
    }
});
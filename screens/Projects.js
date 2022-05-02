import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

function Projects({ navigation}
) {
  return (

    <View style={styles.root}>
    <Text style={styles.maintext}>Aucun Projet ? Il est temps d'en commencer un !</Text>
      <View style={styles.actions}>
        <Button title="Create New Project" onPress={() => { navigation.navigate("NewProject")}}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    padding: 16,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  maintext: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center"
  }
});


export default Projects;

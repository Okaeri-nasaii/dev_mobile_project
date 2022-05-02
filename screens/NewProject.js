import Button from "../components/Button";
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

function NewProject() {
    const CreateProject =() => {
        return "hello"
    }

    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    // const [tags, setTags] = useState([]);
    const [datePicker, setDatePicker] = useState([]);


    return (
        <View>
            <View>
                <Text style={styles.text}>Nom du projet :</Text>
                <TextInput style={styles.textbox} placeholder='Nom du projet'></TextInput>
            <View>
                <Text style={styles.text}>Description du projet :</Text>
                <TextInput style={styles.textbox} placeholder='Description'></TextInput>
            <View>
            <Text style={styles.text}>Tags du projet :</Text>
            </View>
            <View>
            <TouchableOpacity onPress={() => setIsDatePickerVisible(true)}>
                <Text>Choisissez la date de fin de projet : {datePicker[0]}</Text>
            </TouchableOpacity>
                <DateTimePickerModal
                isVisible={isDatePickerVisible}
                onConfirm={(date)=>setDatePicker([date.toDateString()])}
                onCancel={() => setIsDatePickerVisible(false)}
                cancelTextIOS={"Annuler"}
                confirmTextIOS={"Confirmer"}
                mode="date"
                is24Hour={true}
                />
            </View>
            </View>
            </View>
            <Button title="Créer projet" onPress={CreateProject}></Button>
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flexGrow: 1,
        padding: 16,
      },
      textbox: {
        width: 100,
        margin: 8,
      },
      text: {
          fontSize:20
      }
})
export default NewProject;
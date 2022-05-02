import Button from "../components/Button";
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState, useContext } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {dataProjects} from "../assets/projects.js";
import ColorContext from "../ColorContext";


function NewProject({navigation}) {
    const CreateProject =() => {
        if (projectName != "" && description != "" && datePicker[0] != null) {
            dataProjects.projects.push({
                id: dataProjects.projects.length+1,
                projectName: projectName,
                description: description,
                date: datePicker[0],
                userId:34
            })
            setDatePicker([])
            setProjectName("")
            setDescription("")
            setIsDatePickerVisible(false);
            navigation.navigate("Projets");

        }
    }
    const [color] = useContext(ColorContext);
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    // const [tags, setTags] = useState([]);
    const [datePicker, setDatePicker] = useState([]);

    return (
        <View>
            <View style={{height:50}}></View>
            <View>
                <Text style={styles.text}>Nom du projet :</Text>
                <TextInput style={styles.textbox_name} placeholder='Nom du projet' value={projectName} onChangeText={(name) => setProjectName(name)}></TextInput>
                <View>
                    <Text style={styles.text}>Description du projet :</Text>
                    <TextInput style={styles.textbox} placeholder='Description' value={description} onChangeText={(desc) => setDescription(desc)}></TextInput>
                </View>
                <View>
                    <TouchableOpacity style={styles.text} onPress={() => setIsDatePickerVisible(true)}>
                        <Text style={styles.textDate}>Choisissez la date de fin de projet : {datePicker[0]}</Text>
                    </TouchableOpacity>
                        <DateTimePickerModal style={styles.calendar}
                        isVisible={isDatePickerVisible}
                        onConfirm={(date)=>setDatePicker([date.toDateString()])}
                        onCancel={() => setIsDatePickerVisible(false)}
                        cancelTextIOS={"Annuler"}
                        confirmTextIOS={"Confirmer"}
                        mode="date"
                        is24Hour={true}
                        />
                </View>
                <View>
                    
                </View>
                <View>
                    <Button title="Créer projet" onPress={CreateProject} style={styles.button}></Button>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textbox_name: {
        width: 150,
        height: 50,
        borderWidth: 2,
        right: -150,
        top:-45,
        marginLeft: 8
      },
      
    textbox: {
        width: 250,
        height: 100,
        margin: 8,
        borderWidth: 2
      },

    text: {
        fontSize:20,
        margin: 10,
        fontWeight: 'bold'
      },
      
    textDate: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    calendar: {
        fontSize: 20
    },

    button: {
        fontWeight: 'bold',
        transform:[{translateY:100}]
    },

    // FOOTER
    title: {
        fontWeight: "700",
        fontSize: 24,
      },
      tabLabel: {
        fontSize: 20,
        fontWeight: "700",
        height: 32,
      },
      content: {
        flexGrow: 1,
        padding: 16,
      },
      tabBar: {
        height: 72,
      }
})
export default NewProject;
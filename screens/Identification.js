import { useContext, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import app from "../app.json";
import { dataMembers }from "../assets/data.js";
import Button from "../components/Button";
import Avatar from "../components/Avatar";

function Identification({ navigation }) {
  const [value, setValue] = useState("");
  const [member, setMember] = useState(null);
  const [error, setError] = useState(false);
  const styles = createStyles({
    error,
    member: Boolean(member),
  });
  const onChange = (text) => {
    setError(false);
    setMember(null);
    setValue(text);
  };
  const onPress = () => {
    if (value.length > 0) {
      const loggedUser = dataMembers.members.filter(
        ({ firstname, lastname }) =>
          value.toLocaleLowerCase() ===
            `${firstname} ${lastname}`.toLocaleLowerCase() ||
          value.toLocaleLowerCase() ===
            `${lastname} ${firstname}`.toLocaleLowerCase()
      )[0];
      setMember(loggedUser);
      setError(!loggedUser);
    }
  };
  const onNavigateToHome = () => {
    navigation.navigate("Accueil");
  };
  const header = (
    <View style={styles.header}>
      <Text style={styles.title}>{app.expo.name}</Text>
      <Image source={require("../assets/icon.png")} style={styles.logo} />
    </View>
  );
  if (member) {
    global.customColor = member.favoriteColor;
    global.name = `${member.firstname} ${member.lastname}`
    return (
      <View style={styles.root}>
        {header}
        <View style={styles.content}>
          <Avatar
            label={`${member.firstname[0].toLocaleUpperCase()}${member.lastname[0].toLocaleUpperCase()}`}
            color={global.customColor}
          />
          <Text>
            Welcome {member.firstname} {member.lastname} !
          </Text>
          <View style={styles.actions}>
            <Button title="Go to Home" onPress={onNavigateToHome} />
          </View>
        </View>
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.root}>
        {header}
        <View style={styles.content}>
          <View>
            <TextInput
              placeholder="Identifiant"
              style={styles.input}
              value={value}
              onChangeText={onChange}
            />
            <Text style={styles.error}>Wrong credentials.</Text>
          </View>
          <View style={styles.actions}>
            <Button title="S'enregistrer" />
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.root}>
      {header}
      <View style={styles.content}>
        <TextInput
          placeholder="Identifiant"
          style={styles.input}
          value={value}
          onChangeText={onChange}
        />
        <View style={styles.actions}>
          <Button title="S'identifier" onPress={onPress} />
        </View>
      </View>
    </View>
  );
}

export default Identification;

const createStyles = ({ error, member }) =>
  StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: "center",
    },
    header: {
      flexDirection: error || member ? "row" : "column",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: error || member ? 1 : 0,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: error || member ? 12 : 32,
      fontWeight: "700",
    },
    logo: {
      height: error || member ? 32 : 192,
      width: error || member ? 32 : 192,
      marginLeft: error || member ? 8 : 0,
    },
    input: {
      borderColor: error ? "red" : "black",
      borderWidth: 4,
      borderStyle: "solid",
      backgroundColor: "rgba(0,0,0,0.1)",
      padding: 8,
      width: Dimensions.get("window").width - 64,
      fontSize: 20,
      fontWeight: "700",
      marginVertical: 8,
    },
    error: {
      color: "red",
    },
    actions: {
      marginVertical: 16,
    },
  });

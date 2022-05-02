import {
    StyleSheet,
    View,
    Text,
    Image
  } from "react-native";
  import α from "color-alpha";
  
  import "../global.js";
  import Button from "../components/Button"
  
  export default function ProjectDetails({ navigation }) {
    const styles = createStyles();
  
    return (
      <View style={styles.root}>
        <View style={styles.main}>
          <Text style={styles.mainText}>{global.projectDetails.title}</Text>
        </View>
        <View style={styles.footer}>
          <Button
            title="Edit"
            onPress={() => navigation.navigate("EditProject")}
          />
        </View>
      </View>
    );
  }
  
  const createStyles = () =>
    StyleSheet.create({
      root: {
        flex: 1,
        justifyContent: "center",
      },
      title: {
        paddingLeft: 16,
        fontSize: 32,
        fontWeight: "700",
      },
      loggedAvatar: {
        height: 64,
        width: 64,
        backgroundColor: α(global.customColor, 0.1),
        borderColor: global.customColor,
        borderWidth: 4,
        borderStyle: "solid",
        borderRadius: Math.round(64 / 2),
      },
      container: {
        padding: 24,
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
      },
      logo: {
        height: 64,
        width: 64,
        marginLeft: 0,
      },
      header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      footer: {
        backgroundColor: "white",
        padding: 32,
      },
      main: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 48,
      },
      mainText: {
        fontSize: 36,
        textAlign: "center",
        width: "80%",
        fontWeight: "700",
      },
    });
import * as React from "react";
import {
  StyleSheet,
  ScrollView,
  View
} from "react-native";
import α from "color-alpha";

import { dataMembers } from "../assets/data.js";
import Avatar from "../components/Avatar";
import Button from "../components/Button"
import "../global.js";

function Members({ navigation }) {
  const styles = createStyles({});

  React.useEffect(() => {
    const newMember = navigation.addListener("focus", () => {});
    return newMember;
  }, [navigation]);

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.list}>
        {dataMembers.members.map((member) => (
          <View
            style={styles.avatar}
            key={`${member.firstname}${member.lastname}`}
          >
            <Avatar
              label={`${member.firstname[0].toLocaleUpperCase()}${member.lastname[0].toLocaleUpperCase()}`}
              color={member.favoriteColor}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Button
          title="Invite"
        />
      </View>
    </View>
  );
}

export default Members;

const createStyles = ({}) =>
  StyleSheet.create({
    title: {
      paddingLeft: 16,
      fontSize: 32,
      fontWeight: "700",
    },
    logo: {
      height: 64,
      width: 64,
      marginLeft: 0,
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
    root: {
      flex: 1,
      justifyContent: "center",
    },
    list: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    avatar: {
      margin: 16,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    footer: {
      width: "100%",
      padding: 16,
    },
  });
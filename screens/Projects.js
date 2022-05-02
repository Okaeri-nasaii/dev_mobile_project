import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import α from "color-alpha";
import Button from "../components/Button.js"

import "../global.js";
import { dataProjects } from "../assets/projects.js";

export default function Projects({ navigation }) {
  const styles = createStyles({
    projects: dataProjects.projects > 0,
  });

  if (dataProjects.projects.length === 0) {
    return (
      <View styles={styles.root}>
        {header}
        <View style={styles.main}>
          <Text style={styles.mainText}>No projects,</Text>
          <Text style={styles.mainText}>it's time to start a new one !</Text>
          <View style={styles.newProjectBtn}>
            <Button title="New Project" />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.main}>
        <Text style={styles.mainText}>My Projects</Text>
        <View style={styles.tagList}>
        </View>
        <View style={styles.projectsList}>
          {dataProjects.projects.map((project) => (
            <TouchableOpacity
              key={project.id}
              onPress={() => {
                global.projectDetails = project;
                navigation.navigate("ProjectDetails", { project });
              }}
            >
              {global.tagFilter ? (
                <View>
                  {project.tags.includes(global.tagFilter) ? (
                    <View key={project.id}>
                      <Text>{project.projectName}</Text>
                    </View>
                  ) : (
                    <View />
                  )}
                </View>
              ) : (
                <View style={styles.project} key={project.id}>
                  <Text style={styles.projectTitle}>{project.title}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          title="New Project"
          onPress={() => navigation.navigate("NewProject")}
        />
      </View>
    </View>
  );
}

const createStyles = ({ projects }) =>
  StyleSheet.create({
    root: { flex: 1, justifyContent: "center" },
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
    footer: {
      backgroundColor: "white",
      padding: 32,
    },
    main: {
      flexGrow: 1,
      alignItems: "center",
      justifyContent: projects ? "center" : "flex-start",
      paddingTop: 0,
    },
    mainText: {
      fontSize: projects ? 24 : 42,
      textAlign: projects ? "center" : "left",
      width: projects ? 400 : "80%",
    },

    projectsList: {
      width: "80%",
      flexDirection: "column",
      justifyContent: "flex-start",
    },
  });
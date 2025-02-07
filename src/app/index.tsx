import React from "react";

import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  ThemeContext,
  ThemeContextType
} from "../contexts/ThemeContext";
import { Button } from "../components/Button";
import { TaskList } from "../components/TaskList";
import { router } from "expo-router";

export default function Index() {
  const { theme } = React.useContext(ThemeContext) as ThemeContextType

  const myIcon = <Icon name="plus-circle" size={50} color={theme.primary} />;

  return (
    <View style={styles.container}>
      <TaskList />
      <View style={styles.addIcon}>
        <Button
          icon={myIcon}
          onPress={() => {router.push('/add-task')}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingVertical: 20,
  },
  addIcon: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  }
})
import React from "react"
import { Alert, View } from "react-native"

import Icon from 'react-native-vector-icons/FontAwesome';

import { Input } from "../components/Input"
import { StyleSheet } from "react-native"
import { TaskContext, TaskContextType } from "../contexts/TaskContext"
import { Button } from "../components/Button"
import { ThemeContext, ThemeContextType } from "../contexts/ThemeContext"
import { router } from "expo-router";

export default function AddTask() {
  const [description, setDescription] = React.useState<string>('')

  const { theme } = React.useContext(ThemeContext) as ThemeContextType
  const myIcon = <Icon name="plus-circle" size={35} color={theme.primary} />;


  const { addTask } = React.useContext(TaskContext) as TaskContextType

  const addTaskOnClick = React.useCallback(() => {
    addTask(description)
    setDescription('')
    router.back()
  }, [description])

  return (
    <View style={styles.container}>
      <Input
        style={{
          borderColor: theme.primary,
          borderWidth: 1,
          borderRadius: theme.borderRadius.default,
          paddingHorizontal: 5, 
          paddingVertical: 10, 
        }}
        placeholder="Digite uma tarefa..."
        value={description}
        onChangeText={value => setDescription(value)} />
      <Button
        text="Adicionar"
        icon={myIcon}
        onPress={addTaskOnClick} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    padding: 40,
  },
})
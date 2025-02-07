import { StyleSheet, Text } from "react-native"
import { View } from "react-native"
import { Button } from "./Button"

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Task } from "../models/task"

import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext, ThemeContextType } from "../contexts/ThemeContext"
import React from "react"
import { TaskContext, TaskContextType } from "../contexts/TaskContext"

type Props = {
  task: Task
}

export const TaskItem = ({ task }: Props) => {
  const { theme } = React.useContext(ThemeContext) as ThemeContextType
  const { removeTask } = React.useContext(TaskContext) as TaskContextType
  const myIcon = <Icon name="trash-o" size={35} color={theme.primary} />;

  const [createdAt, setCreatedAt] = React.useState('')

  React.useEffect(() => {
    setCreatedAt(formatDistanceToNow(task.createdAt, { addSuffix: true, locale: ptBR, includeSeconds: true }))
    setInterval(() => {
      setCreatedAt(formatDistanceToNow(task.createdAt, { addSuffix: true, locale: ptBR, includeSeconds: true }))
    }, 1000 * 30)
  }, [])

  const removeOnClick = React.useCallback(() => {
    removeTask(task.id)
  }, [task.id])

  return (
    <View style={[
      style.container, {
        backgroundColor: theme.background,
      }
    ]}>
      <View style={style.info}>
        <Text style={style.description}>{task.description}</Text>
        <Text style={style.createdAt}>
          {createdAt}
        </Text>
      </View>
      <View style={style.actions}>
        <Button icon={myIcon} onPress={() => removeOnClick()} />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  info: {
    flexGrow: 1,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  createdAt: {
    fontWeight: '400',
    fontSize: 13,
  },
  actions: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})
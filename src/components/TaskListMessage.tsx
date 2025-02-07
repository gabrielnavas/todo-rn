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
  message: string
}

export const TaskListMessage = ({ message }: Props) => {
  const { theme } = React.useContext(ThemeContext) as ThemeContextType
  const myIcon = <Icon name="warning" size={35} color={theme.primary} />;

  return (
    <View style={[
      style.container, {
        backgroundColor: theme.background,
      }
    ]}>
    
        <Text style={style.description}>{message}</Text>
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
  description: {
    fontWeight: 'bold',
    fontSize: 20,
  },
})
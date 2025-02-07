import React from "react"
import { FlatList, View } from "react-native"
import { TaskItem } from "./TaskItem"
import { Task } from "../models/task"
import { TaskContext, TaskContextType } from "../contexts/TaskContext"
import { TaskListMessage } from "./TaskListMessage"

export const TaskList = () => {

  const { tasks } = React.useContext(TaskContext) as TaskContextType

  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      data={tasks}
      renderItem={({ item }) => <TaskItem task={item} />}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={() => (
        <TaskListMessage message="Nenhuma tarefa listada." />
      )}
    />
  )
}
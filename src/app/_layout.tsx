import { Stack } from "expo-router"
import { ThemeProvider } from "../contexts/ThemeContext"
import { TaskProvider } from "../contexts/TaskContext"

export default function AppLayout() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Stack>
          <Stack.Screen options={{ headerShown: true, title: 'To Do List', headerTitleAlign: 'center', }} name='index' />
          <Stack.Screen options={{ headerShown: false }} name='add-task' />
        </Stack>
      </TaskProvider>
    </ThemeProvider>
  )
}
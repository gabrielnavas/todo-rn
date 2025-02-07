import React from "react";
import { Task } from "../models/task";
import { generateUUID } from "../utils/generate-uuid";
import AsyncStorage from '@react-native-async-storage/async-storage';

const asyncKeys = {
  tasks: 'tasks',
};

const lengthUUID = 32;

export type TaskContextType = {
  tasks: Task[];
  addTask: (description: string) => void;
  removeTask: (taskId: string) => void;
};

type Props = {
  children: React.ReactNode;
};

export const TaskContext = React.createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children }: Props) => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  React.useEffect(() => {
    async function fetchTasksFromAsyncStorage() {
      try {
        const data = await AsyncStorage.getItem(asyncKeys.tasks);
        if (data !== null) {
          setTasks(JSON.parse(data));
        }
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    }

    fetchTasksFromAsyncStorage();
  }, []);

  const addTask = React.useCallback(async (description: string) => {
    const newTask: Task = {
      id: generateUUID(lengthUUID),
      description,
      createdAt: new Date(),
    };

    setTasks((prevTasks) => {
      const updatedTasks = [newTask, ...prevTasks];
      AsyncStorage.setItem(asyncKeys.tasks, JSON.stringify(updatedTasks))
        .catch((error) => console.error("Failed to save task:", error));
      return updatedTasks;
    });
  }, []);

  const removeTask = React.useCallback(async (taskId: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter(task => task.id !== taskId);
      AsyncStorage.setItem(asyncKeys.tasks, JSON.stringify(updatedTasks))
        .catch((error) => console.error("Failed to remove task:", error));
      return updatedTasks;
    });
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

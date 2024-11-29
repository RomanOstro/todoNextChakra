"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Separator,
} from "@chakra-ui/react";
import { TodoForm } from "./components/todo-form";
import { ChangeEvent, useState } from "react";
import { TaskCard } from "./components/task-card";

interface ITask {
  id: string;
  text: string;
  status: boolean;
}

export default function Home() {
  const [taskInput, setTastInput] = useState("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const taskCompleted = tasks.filter((task) => task.status); /// status === true
  const uncompletedTasks = tasks.filter((task) => !task.status); /// status === false

  const hendleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setTastInput(value);
  };

  const createTask = () => {
    if (taskInput) {
      const newTask = {
        id: Date.now().toString(),
        text: taskInput,
        status: false,
      };

      setTasks([...uncompletedTasks, newTask, ...taskCompleted]);

      setTastInput("");
    }
  };


  const handleToggleTask = (id: string) => {
    setTasks((tasks) => {
      const updateTasks = tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      );
      const taskCompleted = updateTasks.filter((task) => task.status); /// status === true
      const uncompletedTasks = updateTasks.filter((task) => !task.status); /// status === false

      return [...uncompletedTasks, ...taskCompleted]
      
    });
  };

  const removeTask = (id: string) => {
    const removTask = tasks.filter((task) => task.id !== id);
    setTasks(removTask);
  };

  return (
    <Box pt={"12vh"}>
      <Flex
        bg={"blue.500"}
        flexDirection={"column"}
        alignContent={"center"}
        width="50vw"
        mx={"auto"}
        textAlign={"center"}
        borderRadius={"5px"}
        px={"5px"}
      >
        <Heading size={"2xl"} py="5">
          TODO List
        </Heading>
        <TodoForm
          changeInput={hendleChangeInput}
          value={taskInput}
          createTask={createTask}
        />
        <Separator variant={"dashed"} size={"md"} mb={"5px"} />
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            text={task.text}
            status={task.status}
            deleteTask={() => removeTask(task.id)}
            taskChangeStatus={() => handleToggleTask(task.id)}
          />
        ))}
      </Flex>
    </Box>
  );
}

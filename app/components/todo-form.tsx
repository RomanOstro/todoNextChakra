import { Flex, IconButton, Input, Button } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface ITodoForm {
  value: string;
  createTask:()=> void;
  changeInput: (e:ChangeEvent<HTMLInputElement>) => void;
}

export function TodoForm({value, changeInput, createTask}:ITodoForm) {
  return (
    <Flex gap={"5px"} p={"5px"}>
      <Input
        name="task"
        placeholder="Add task..."
        color={"whiteAlpha.800"}
        fontSize={"15px"}
        outline={"none"}
        value={value}
        onChange={changeInput}
      ></Input>
      <Button
        background={"white"}
        color={"blackAlpha.900"}
        onClick={createTask}
      >
        Ok
      </Button>
    </Flex>
  );
}

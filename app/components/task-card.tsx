import { Button, Card, Flex, Text } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";


interface TaskCardProp {
  id: string;
  deleteTask: () => void;
  text: string;
  status: boolean;
  taskChangeStatus: () => void;
}

export const TaskCard = ({
  id,
  deleteTask,
  text,
  status,
  taskChangeStatus,
}: TaskCardProp) => {
  return (
    <Card.Root
      style={{ opacity: status ? 0.8 : 1 }}
      id={id}
      w="full"
      mb={"5px"}
      alignItems={"center"}
    >
      <Flex gap={"20px"} alignSelf={"flex-start"} pt={"5px"}>
        <Checkbox
          w={"full"}
          checked={status}
          onChange={taskChangeStatus}
          ml={"10px"}
        >{text}</Checkbox> 
        {/*<Text as={status ? "del" : "b"}>{text}</Text>  - можно в чекбокс вставить такой текст, но не нашол инструкции как это работает */}
      </Flex>
      <Button
        colorPalette={"blue"}
        variant="outline"
        mb={"3px"}
        width={"15%"}
        h={"10%"}
        w={"15%"}
        onClick={deleteTask}
      >
        Delete
      </Button>
    </Card.Root>
  );
};

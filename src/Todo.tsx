import { VFC } from "react";
import { TodoType } from "./types/Todo";

export const Todo: VFC<Omit<TodoType, "id">> = (
  //   props: Pick<TodoType, "userId" | "title" | "completed">
  props
) => {
  const { title, userId, completed = false } = props;
  const compeleteMark = completed ? "[完]" : "[未]";

  return <p>{`${compeleteMark}${title}(ユーザー:${userId})`}</p>;
};

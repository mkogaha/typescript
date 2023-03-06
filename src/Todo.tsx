import { TodoType } from "./types/Todo";
import { VFC } from "react";

// Pick
// 指定した型から情報を抜き出す
// props: Pick<TodoType, "title" | "userId" | "completed">
//
// Omit
// 型から情報を省略する
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed } = props;
  const mark = completed ? "[完]" : "[未]";
  return <p>{`${mark} ${title}(ユーザー：${userId})`}</p>;
};

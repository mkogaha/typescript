import { VFC } from "react";
import { User } from "./types/User";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* オプショナルチェイニングの書き方。nullの場合は空文字になる */}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};

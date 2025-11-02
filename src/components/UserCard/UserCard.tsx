import { memo, useContext } from "react";
import type { User } from "../../types";
import { ThemeContext } from "../../contexts/ThemeContext";

type UserCardProps = User;

function UserCardComponent({ name, email }: UserCardProps) {
  const theme = useContext(ThemeContext);
  const cardClassName = theme === "dark" ? "card dark-mode" : "card";

  console.log(`Rendering UserCard: ${name}`);
  return (
    <div className={cardClassName}>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export const UserCard = memo(UserCardComponent);

import { Hamb } from "../../elements/Hamb/Hamb";
import { UserAvatar } from "../../elements/UserAvatar/UserAvatar";
import { Logo } from "../../elements/Logo/Logo";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Hamb />
        <Logo />
        <UserAvatar />
      </div>
    </header>
  );
};

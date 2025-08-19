import Image from "next/image";
import styles from "./page.module.css";

import {Profile} from '@/componente/Profile';
import {TodoList} from '@/componente/TodoList';
import {Avatar} from '@/componente/Avatar';

export default function Home(){
  return (
  <div>
    <h1>Olá turma!</h1>
    <Profile />
    <TodoList />
    <Avatar />
  </div>
  );
}
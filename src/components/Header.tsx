import { FormEvent, InvalidEvent } from 'react'
import styles from './Header.module.css'
import { Input } from './Input'



interface IHeader {
  inputText: string;
  handleInput: (text: string) => void;
  handleNewTask: (event: FormEvent) => void;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
 }
export function Header({
  handleInput,
  handleNewTask,
  inputText,
  setInputText,
}: IHeader){
  return(
    <header className={styles.header}>
      <h1 className={styles.title}>
         <span>to</span>
         <p>do</p>
      </h1>
      <Input 
        setInputText={setInputText}
        handleInput={handleInput}
        handleNewTask={handleNewTask}
        inputText={inputText}/>
     
    </header>
  )
}
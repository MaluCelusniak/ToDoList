import { CheckCircle, Trash } from 'phosphor-react'
import { useState } from 'react';
import styles from './Task.module.css'

interface Content {
  content: string;
  isChecked: boolean;
  onDeleteTask: (task: string) => void;
  onCheck: (task: string) => void;
}

export function Task({ content, onDeleteTask, onCheck, isChecked }: Content) {
  function handleDeleteTask() {
    onDeleteTask(content)
  }
  return (

    <div className={styles.task}>
      
      <CheckCircle  size={20} className={styles.checked} />
      <input defaultChecked={isChecked} onClick={(e) => onCheck(content)} type="checkbox" placeholder='checkbox' id={`check-${content}`}/>
      <label className={isChecked ? styles.done : styles.undone} 
      htmlFor={`check-${content}`}
      // onClick={(e) => onCheck(content)}
      >{content}</label>
      <Trash onClick={handleDeleteTask} className={styles.trash} size={24}/>
    </div>
  )
} 
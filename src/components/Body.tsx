import { ClipboardText } from "phosphor-react";
import styles from './Body.module.css'
import { Task } from "./Task";

interface TasksArray {
  tasks: Task[];
  onDeleteTask: (task: string) => void;
  onCheck: (task: string) => void;
  totalTasks: number;
}
export interface Task {
    content:string;
    isChecked:boolean;
}

export function Body({ tasks, onDeleteTask, onCheck, totalTasks }:TasksArray ) {
  console.log(tasks)
  const concluidas = tasks.reduce((count, task) => (task.isChecked === true ? count +=1 : count), 0)
  
  

  return (
    <div className={styles.body}>
      <div  className={styles.info}>
        <div className={styles.created}>
          <span>Tarefas criadas</span>
          <div className={styles.number}>{totalTasks}</div>
        </div>
        <div className={styles.finished}>
          <p>Concluídas</p>
          <div className={styles.number}>{concluidas} de {totalTasks}</div>
        </div>
      </div>
      <div className={tasks.length === 0 ? styles.empty : styles.notEmpty}>
      <ClipboardText size={56}/>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
      <div className="tasksList">
        {tasks.map((task, index) => {
          return (<Task 
            key={index}
            onCheck={onCheck}
            onDeleteTask={onDeleteTask}
            content={task.content}
            isChecked={task.isChecked}
          />)
        })}
      </div>
    
    </div>
  )
}
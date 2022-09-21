import styles from './TaskTable.module.css';

export const TaskTable = () => {
  return (
    <div className={styles['TaskTable']}>
      <div className={styles['TaskInfo']}>
        <div className={styles['TaskDetails']}>
          <span className={styles['Created']}>Tarefas Criadas</span>
          <div className={styles['CreatedCounter']}>
            <span>5</span>
          </div>
        </div>

        <div className={styles['TaskDetails']}>
          <span>Concluídas</span>
          <span>2 de 5</span>
        </div>
      </div>
    </div>
  )
}
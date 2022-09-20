import styles from './Header.module.css';

import todoLogo from '../../assets/Logo.svg'

export const Header = () => {
  console.log(styles)
  return (
    <header className={styles['header']}>
      <img src={todoLogo} alt="logo do desafio um" />
    </header>
  )
}
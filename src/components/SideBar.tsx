import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './SideBar.module.css'

export default function SideBar() {
  return (
    <aside className={styles.sideBar}>
        <img className={styles.cover}
        src="https://images.unsplash.com/photo-1638913971251-832d29947de6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" />

        <div className={styles.profile}>
            <Avatar src="https://avatars.githubusercontent.com/u/46281789?v=4"/>
            <strong>Júnior Alves</strong>
            <span>CTO @JuniorServiços</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>
    </aside>
  )
}

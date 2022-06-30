import Header from "./components/Header"
import './global.css'
import styles from './App.module.css'
import SideBar from "./components/SideBar"
import { Post } from "./components/Post"

const posts = [
  {
    id:1,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/46281789?v=4',
      name: 'Júnior Alves',
      role: 'CTO @JuniorServiços'
    },
    content:[
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-06-15 20:00:00'),
  },
  {
    id:2,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/46281789?v=4',
      name: 'Sidney Júnior',
      role: 'Web Developer'
    },
    content:[
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-06-17 20:00:00'),
  }
]

function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          {posts.map( post =>{
            return (
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App

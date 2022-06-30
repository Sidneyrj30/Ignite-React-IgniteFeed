import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react'
import {Avatar} from './Avatar'
import styles from './Comment.module.css'

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export default function Comment({content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleCountComment() {
        setLikeCount(likeCount + 1)
    }

  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/46281789?v=4" />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Sidney Rodrigues</strong>
                        <time title="" dateTime="">Publicado há 1 hora</time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'> 
                        <Trash size={22}/> 
                    </button>
                </header>
                <p>{content}</p>
            </div>
            <footer>
                <button onClick={handleCountComment}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div> 
  )
}

import type { Conversation } from '../../types/Conversation'
import styles from './ConversationCard.module.css'

type ConversationCardProps = {
  conversation: Conversation
  setSelectedConversation: (conversation: Conversation) => void
}

function ConversationCard(props: ConversationCardProps) {
  function handleClick() {
    props.setSelectedConversation(props.conversation)
  }

  return (
    <article className={styles.card} onClick={handleClick}>
      <div className={styles.topRow}>
        <h3 className={styles.customerName}>{props.conversation.customerName}</h3>
        <span className={styles.priority}>{props.conversation.priority}</span>
      </div>

      <p className={styles.issue}>{props.conversation.issue}</p>

      <div className={styles.bottomRow}>
        <span className={styles.meta}>Waiting: {props.conversation.waitingTime}</span>
        <span className={styles.meta}>Sentiment: {props.conversation.sentiment}</span>
      </div>
    </article>
  )
}

export default ConversationCard

import styles from './ConversationCard.module.css'

type ConversationCardProps = {
  customerName: string
  issue: string
  priority: string
  waitingTime: string
  sentiment: string
}

function ConversationCard(props: ConversationCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.topRow}>
        <h3 className={styles.customerName}>{props.customerName}</h3>
        <span className={styles.priority}>{props.priority}</span>
      </div>

      <p className={styles.issue}>{props.issue}</p>

      <div className={styles.bottomRow}>
        <span className={styles.meta}>Waiting: {props.waitingTime}</span>
        <span className={styles.meta}>Sentiment: {props.sentiment}</span>
      </div>
    </article>
  )
}

export default ConversationCard

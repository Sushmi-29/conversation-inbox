import type { Conversation } from '../../types/Conversation'
import styles from './RecommendedCard.module.css'

type RecommendedCardProps = {
  isLoading: boolean
  recommendedConversation: Conversation | null
  setSelectedConversation: (conversation: Conversation) => void
}

function RecommendedCard(props: RecommendedCardProps) {
  if (props.isLoading) {
    return (
      <section className={styles.recommendedCard} aria-label="Recommended next conversation">
        <h2 className={styles.title}>⭐ Recommended Next</h2>
        <p className={styles.emptyMessage}>Loading recommendation...</p>
      </section>
    )
  }

  if (props.recommendedConversation === null) {
    return (
      <section className={styles.recommendedCard} aria-label="Recommended next conversation">
        <h2 className={styles.title}>⭐ Recommended Next</h2>
        <p className={styles.emptyMessage}>No conversations found.</p>
      </section>
    )
  }

  const conversation = props.recommendedConversation

  function handleOpenConversation() {
    props.setSelectedConversation(conversation)
  }

  return (
    <section className={styles.recommendedCard} aria-label="Recommended next conversation">
      <h2 className={styles.title}>⭐ Recommended Next</h2>

      <div className={styles.content}>
        <div className={styles.row}>
          <span className={styles.label}>Customer Name</span>
          <span className={styles.value}>{conversation.customerName}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Issue</span>
          <span className={styles.value}>{conversation.issue}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Priority</span>
          <span className={styles.priority}>{conversation.priority}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Waiting Time</span>
          <span className={styles.value}>{conversation.waitingTime}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Reason</span>
          <span className={styles.value}>{conversation.escalationReason}</span>
        </div>
      </div>

      <button
        className={styles.openButton}
        type="button"
        onClick={handleOpenConversation}
      >
        Open Conversation
      </button>
    </section>
  )
}

export default RecommendedCard

import type { Conversation } from '../../types/Conversation'
import styles from './ConversationDetails.module.css'

type ConversationDetailsProps = {
  isLoading: boolean
  selectedConversation: Conversation | null
}

function ConversationDetails(props: ConversationDetailsProps) {
  if (props.isLoading) {
    return (
      <section className={styles.details}>
        <h2 className={styles.title}>Conversation Details</h2>
        <p className={styles.text}>Loading conversation details...</p>
      </section>
    )
  }

  if (props.selectedConversation === null) {
    return (
      <section className={styles.details}>
        <h2 className={styles.title}>Conversation Details</h2>
        <p className={styles.text}>No conversation selected.</p>
      </section>
    )
  }

  const conversation = props.selectedConversation

  return (
    <section className={styles.details}>
      <h2 className={styles.title}>Conversation Details</h2>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Customer Information</h3>
        <p className={styles.text}>Name: {conversation.customerName}</p>
        <p className={styles.text}>Email: {conversation.email}</p>
        <p className={styles.text}>Plan: {conversation.plan}</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Issue Summary</h3>
        <p className={styles.text}>{conversation.issueSummary}</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Conversation Timeline</h3>
        {conversation.timeline.map(function (item, index) {
          return (
            <p className={styles.timelineItem} key={index}>
              {item}
            </p>
          )
        })}
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Escalation Reason</h3>
        <p className={styles.text}>{conversation.escalationReason}</p>
      </div>

      <div className={styles.actions}>
        <button className={styles.primaryButton} type="button">
          Assign to Me
        </button>
        <button className={styles.secondaryButton} type="button">
          Mark In Progress
        </button>
        <button className={styles.successButton} type="button">
          Resolve
        </button>
      </div>
    </section>
  )
}

export default ConversationDetails

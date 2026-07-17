import ConversationCard from '../ConversationCard/ConversationCard'
import styles from './ConversationList.module.css'

function ConversationList() {
  return (
    <section className={styles.conversationList}>
      <h2 className={styles.title}>Conversation List</h2>

      <ConversationCard
        customerName="James Wilson"
        issue="Payment failed after subscription renewal"
        priority="High"
        waitingTime="47 mins"
        sentiment="Negative"
      />

      <ConversationCard
        customerName="Emily Chen"
        issue="Cannot access account after password reset"
        priority="High"
        waitingTime="38 mins"
        sentiment="Negative"
      />

      <ConversationCard
        customerName="Michael Brown"
        issue="Refund request for cancelled order"
        priority="Medium"
        waitingTime="25 mins"
        sentiment="Neutral"
      />

      <ConversationCard
        customerName="Sophia Martinez"
        issue="App crashes when uploading files"
        priority="Medium"
        waitingTime="18 mins"
        sentiment="Negative"
      />

      <ConversationCard
        customerName="Daniel Lee"
        issue="Need help changing billing address"
        priority="Low"
        waitingTime="12 mins"
        sentiment="Positive"
      />
    </section>
  )
}

export default ConversationList

import styles from './ConversationDetails.module.css'

function ConversationDetails() {
  return (
    <section className={styles.details}>
      <h2 className={styles.title}>Conversation Details</h2>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Customer Information</h3>
        <p className={styles.text}>Name: James Wilson</p>
        <p className={styles.text}>Email: james.wilson@email.com</p>
        <p className={styles.text}>Plan: Premium</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Issue Summary</h3>
        <p className={styles.text}>
          Customer reports that payment failed after their subscription renewed.
          They have been charged but still see an inactive status.
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Conversation Timeline</h3>
        <p className={styles.timelineItem}>
          10:12 AM - Customer started chat about payment failure
        </p>
        <p className={styles.timelineItem}>
          10:15 AM - AI asked for order ID and payment method
        </p>
        <p className={styles.timelineItem}>
          10:22 AM - Customer shared screenshots of the charge
        </p>
        <p className={styles.timelineItem}>
          10:28 AM - Escalated to human agent
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Escalation Reason</h3>
        <p className={styles.text}>
          Billing dispute with failed payment confirmation. AI could not verify
          the charge status and customer is waiting too long.
        </p>
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

import styles from './RecommendedCard.module.css'

function RecommendedCard() {
  return (
    <section className={styles.recommendedCard}>
      <h2 className={styles.title}>⭐ Recommended Next</h2>

      <div className={styles.content}>
        <div className={styles.row}>
          <span className={styles.label}>Customer Name</span>
          <span className={styles.value}>James Wilson</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Issue</span>
          <span className={styles.value}>Payment failed after subscription renewal</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Priority</span>
          <span className={styles.priority}>High</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Waiting Time</span>
          <span className={styles.value}>47 mins</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Reason</span>
          <span className={styles.value}>
            Long wait time and negative customer sentiment
          </span>
        </div>
      </div>

      <button className={styles.openButton} type="button">
        Open Conversation
      </button>
    </section>
  )
}

export default RecommendedCard

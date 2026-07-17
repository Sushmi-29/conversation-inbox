import styles from './SummaryCards.module.css'

function SummaryCards() {
  return (
    <section className={styles.summaryCards}>
      <div className={styles.card}>
        <p className={styles.label}>High Priority</p>
        <p className={styles.number}>8</p>
      </div>

      <div className={styles.card}>
        <p className={styles.label}>Waiting &gt;30 mins</p>
        <p className={styles.number}>12</p>
      </div>

      <div className={styles.card}>
        <p className={styles.label}>Resolved Today</p>
        <p className={styles.number}>24</p>
      </div>
    </section>
  )
}

export default SummaryCards

import styles from './SummaryCards.module.css'

type SummaryCardsProps = {
  highPriorityCount: number
  waitingLongCount: number
  resolvedTodayCount: number
}

function SummaryCards(props: SummaryCardsProps) {
  return (
    <section className={styles.summaryCards} aria-label="Support overview">
      <div className={styles.card}>
        <p className={styles.label}>High Priority</p>
        <p className={styles.number}>{props.highPriorityCount}</p>
      </div>

      <div className={styles.card}>
        <p className={styles.label}>Waiting &gt;30 mins</p>
        <p className={styles.number}>{props.waitingLongCount}</p>
      </div>

      <div className={styles.card}>
        <p className={styles.label}>Resolved Today</p>
        <p className={styles.number}>{props.resolvedTodayCount}</p>
      </div>
    </section>
  )
}

export default SummaryCards

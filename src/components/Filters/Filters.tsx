import styles from './Filters.module.css'

function Filters() {
  return (
    <section className={styles.filters}>
      <button className={styles.filterButton} type="button">
        High Priority
      </button>
      <button className={styles.filterButton} type="button">
        Waiting Long
      </button>
      <button className={styles.filterButton} type="button">
        Negative Sentiment
      </button>
      <button className={styles.filterButton} type="button">
        Unassigned
      </button>
    </section>
  )
}

export default Filters

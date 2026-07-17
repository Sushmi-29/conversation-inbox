import styles from './Filters.module.css'

type FiltersProps = {
  activeFilter: string
  setActiveFilter: (filter: string) => void
}

function Filters(props: FiltersProps) {
  function handleFilterClick(filterName: string) {
    if (props.activeFilter === filterName) {
      props.setActiveFilter('')
    } else {
      props.setActiveFilter(filterName)
    }
  }

  return (
    <nav className={styles.filters} aria-label="Quick filters">
      <button
        className={
          props.activeFilter === 'High Priority'
            ? styles.filterButtonActive
            : styles.filterButton
        }
        type="button"
        aria-pressed={props.activeFilter === 'High Priority'}
        onClick={function () {
          handleFilterClick('High Priority')
        }}
      >
        High Priority
      </button>

      <button
        className={
          props.activeFilter === 'Waiting Long'
            ? styles.filterButtonActive
            : styles.filterButton
        }
        type="button"
        aria-pressed={props.activeFilter === 'Waiting Long'}
        onClick={function () {
          handleFilterClick('Waiting Long')
        }}
      >
        Waiting Long
      </button>

      <button
        className={
          props.activeFilter === 'Negative Sentiment'
            ? styles.filterButtonActive
            : styles.filterButton
        }
        type="button"
        aria-pressed={props.activeFilter === 'Negative Sentiment'}
        onClick={function () {
          handleFilterClick('Negative Sentiment')
        }}
      >
        Negative Sentiment
      </button>

      <button
        className={
          props.activeFilter === 'Unassigned'
            ? styles.filterButtonActive
            : styles.filterButton
        }
        type="button"
        aria-pressed={props.activeFilter === 'Unassigned'}
        onClick={function () {
          handleFilterClick('Unassigned')
        }}
      >
        Unassigned
      </button>
    </nav>
  )
}

export default Filters

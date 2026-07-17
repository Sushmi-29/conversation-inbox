import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.textBlock}>
        <h1 className={styles.greeting}>Good Morning, Sarah</h1>
        <p className={styles.subtitle}>Here's today's support overview</p>
      </div>

      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search conversations..."
      />
    </header>
  )
}

export default Header

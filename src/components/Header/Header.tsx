import type { ChangeEvent } from 'react'
import styles from './Header.module.css'

type HeaderProps = {
  searchText: string
  setSearchText: (value: string) => void
}

function Header(props: HeaderProps) {
  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    props.setSearchText(event.target.value)
  }

  return (
    <header className={styles.header}>
      <div className={styles.textBlock}>
        <h1 className={styles.greeting}>Good Morning, Sushmitha</h1>
        <p className={styles.subtitle}>Here's today's support overview</p>
      </div>

      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search conversations..."
        aria-label="Search conversations"
        value={props.searchText}
        onChange={handleSearchChange}
      />
    </header>
  )
}

export default Header

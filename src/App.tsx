import Header from './components/Header/Header'
import SummaryCards from './components/SummaryCards/SummaryCards'
import RecommendedCard from './components/RecommendedCard/RecommendedCard'
import Filters from './components/Filters/Filters'
import ConversationList from './components/ConversationList/ConversationList'
import ConversationDetails from './components/ConversationDetails/ConversationDetails'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <SummaryCards />
      <RecommendedCard />
      <Filters />

      <div className={styles.mainContent}>
        <ConversationList />
        <ConversationDetails />
      </div>
    </div>
  )
}

export default App

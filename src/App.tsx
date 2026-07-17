import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import SummaryCards from './components/SummaryCards/SummaryCards'
import RecommendedCard from './components/RecommendedCard/RecommendedCard'
import Filters from './components/Filters/Filters'
import ConversationList from './components/ConversationList/ConversationList'
import ConversationDetails from './components/ConversationDetails/ConversationDetails'
import { mockConversations } from './data/mockConversations'
import type { Conversation } from './types/Conversation'
import styles from './App.module.css'

function getWaitingMinutes(waitingTime: string) {
  return parseInt(waitingTime)
}

function getPriorityScore(priority: string) {
  if (priority === 'High') {
    return 3
  }

  if (priority === 'Medium') {
    return 2
  }

  return 1
}

function getSentimentScore(sentiment: string) {
  if (sentiment === 'Negative') {
    return 3
  }

  if (sentiment === 'Neutral') {
    return 2
  }

  return 1
}

function getAssignedScore(assigned: boolean) {
  if (assigned === false) {
    return 1
  }

  return 0
}

function getRecommendedConversation(conversations: Conversation[]) {
  if (conversations.length === 0) {
    return null
  }

  const conversationsCopy = conversations.slice()

  conversationsCopy.sort(function (a, b) {
    const priorityDifference =
      getPriorityScore(b.priority) - getPriorityScore(a.priority)

    if (priorityDifference !== 0) {
      return priorityDifference
    }

    const waitingDifference =
      getWaitingMinutes(b.waitingTime) - getWaitingMinutes(a.waitingTime)

    if (waitingDifference !== 0) {
      return waitingDifference
    }

    const sentimentDifference =
      getSentimentScore(b.sentiment) - getSentimentScore(a.sentiment)

    if (sentimentDifference !== 0) {
      return sentimentDifference
    }

    return getAssignedScore(b.assigned) - getAssignedScore(a.assigned)
  })

  return conversationsCopy[0]
}

function App() {
  const [selectedConversation, setSelectedConversation] = useState<
    Conversation | null
  >(mockConversations[0])
  const [searchText, setSearchText] = useState('')
  const [activeFilter, setActiveFilter] = useState('')

  const filteredConversations = mockConversations.filter(function (conversation) {
    const nameMatchesSearch = conversation.customerName
      .toLowerCase()
      .includes(searchText.toLowerCase())

    if (nameMatchesSearch === false) {
      return false
    }

    if (activeFilter === 'High Priority') {
      return conversation.priority === 'High'
    }

    if (activeFilter === 'Waiting Long') {
      return getWaitingMinutes(conversation.waitingTime) >= 30
    }

    if (activeFilter === 'Negative Sentiment') {
      return conversation.sentiment === 'Negative'
    }

    if (activeFilter === 'Unassigned') {
      return conversation.assigned === false
    }

    return true
  })

  useEffect(
    function () {
      if (filteredConversations.length === 0) {
        setSelectedConversation(null)
        return
      }

      setSelectedConversation(function (currentConversation) {
        if (currentConversation === null) {
          return filteredConversations[0]
        }

        return currentConversation
      })
    },
    [searchText, activeFilter]
  )

  const recommendedConversation = getRecommendedConversation(filteredConversations)

  return (
    <div className={styles.app}>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <SummaryCards />
      <RecommendedCard
        recommendedConversation={recommendedConversation}
        setSelectedConversation={setSelectedConversation}
      />
      <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <div className={styles.mainContent}>
        <ConversationList
          conversations={filteredConversations}
          setSelectedConversation={setSelectedConversation}
        />
        <ConversationDetails selectedConversation={selectedConversation} />
      </div>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import SummaryCards from './components/SummaryCards/SummaryCards'
import RecommendedCard from './components/RecommendedCard/RecommendedCard'
import Filters from './components/Filters/Filters'
import ConversationList from './components/ConversationList/ConversationList'
import ConversationDetails from './components/ConversationDetails/ConversationDetails'
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
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [selectedConversation, setSelectedConversation] = useState<
    Conversation | null
  >(null)
  const [searchText, setSearchText] = useState('')
  const [activeFilter, setActiveFilter] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

  function loadConversations() {
    setIsLoading(true)
    setErrorMessage('')

    fetch('/api/conversations')
      .then(function (response) {
        if (response.ok === false) {
          throw new Error('Request failed')
        }

        return response.json()
      })
      .then(function (data: Conversation[]) {
        setConversations(data)
        setIsLoading(false)
      })
      .catch(function () {
        setErrorMessage(
          'Unable to load conversations. Please try again.'
        )
        setIsLoading(false)
      })
  }

  useEffect(function () {
    loadConversations()
  }, [])

  const filteredConversations = conversations.filter(function (conversation) {
    if (conversation.status === 'Resolved') {
      return false
    }

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

  const highPriorityCount = conversations.filter(function (conversation) {
    return conversation.priority === 'High'
  }).length

  const waitingLongCount = conversations.filter(function (conversation) {
    return getWaitingMinutes(conversation.waitingTime) > 30
  }).length

  const resolvedTodayCount = conversations.filter(function (conversation) {
    return conversation.status === 'Resolved'
  }).length

  useEffect(
    function () {
      if (isLoading) {
        return
      }

      if (filteredConversations.length === 0) {
        setSelectedConversation(null)
        return
      }

      setSelectedConversation(function (currentConversation) {
        if (currentConversation === null) {
          return filteredConversations[0]
        }

        const stillInList = filteredConversations.some(function (conversation) {
          return conversation.id === currentConversation.id
        })

        if (stillInList === false) {
          return filteredConversations[0]
        }

        return currentConversation
      })
    },
    [searchText, activeFilter, conversations, isLoading]
  )

  const recommendedConversation = getRecommendedConversation(filteredConversations)

  function handleSelectConversation(conversation: Conversation) {
    setStatusMessage('')
    setSelectedConversation(conversation)
  }

  function handleAssignSuccess(updatedConversation: Conversation) {
    setStatusMessage('')

    setConversations(function (currentConversations) {
      return currentConversations.map(function (conversation) {
        if (conversation.id === updatedConversation.id) {
          return updatedConversation
        }

        return conversation
      })
    })

    setSelectedConversation(updatedConversation)
  }

  function handleMarkInProgress(conversation: Conversation) {
    const updatedConversation: Conversation = {
      id: conversation.id,
      customerName: conversation.customerName,
      issue: conversation.issue,
      priority: conversation.priority,
      waitingTime: conversation.waitingTime,
      sentiment: conversation.sentiment,
      assigned: conversation.assigned,
      status: 'In Progress',
      email: conversation.email,
      plan: conversation.plan,
      issueSummary: conversation.issueSummary,
      timeline: conversation.timeline,
      escalationReason: conversation.escalationReason,
    }

    setConversations(function (currentConversations) {
      return currentConversations.map(function (item) {
        if (item.id === updatedConversation.id) {
          return updatedConversation
        }

        return item
      })
    })

    setSelectedConversation(updatedConversation)
    setStatusMessage('Conversation marked as in progress.')
  }

  function handleResolve(conversationId: string) {
    setConversations(function (currentConversations) {
      return currentConversations.map(function (conversation) {
        if (conversation.id === conversationId) {
          return {
            id: conversation.id,
            customerName: conversation.customerName,
            issue: conversation.issue,
            priority: conversation.priority,
            waitingTime: conversation.waitingTime,
            sentiment: conversation.sentiment,
            assigned: conversation.assigned,
            status: 'Resolved',
            email: conversation.email,
            plan: conversation.plan,
            issueSummary: conversation.issueSummary,
            timeline: conversation.timeline,
            escalationReason: conversation.escalationReason,
          }
        }

        return conversation
      })
    })

    setStatusMessage('Conversation resolved successfully.')
  }

  return (
    <div className={styles.app}>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <SummaryCards
        highPriorityCount={highPriorityCount}
        waitingLongCount={waitingLongCount}
        resolvedTodayCount={resolvedTodayCount}
      />

      {errorMessage !== '' ? (
        <div className={styles.errorBox}>
          <p className={styles.errorMessage}>{errorMessage}</p>
          <button
            className={styles.retryButton}
            type="button"
            onClick={loadConversations}
          >
            Retry
          </button>
        </div>
      ) : (
        <>
          <RecommendedCard
            isLoading={isLoading}
            recommendedConversation={recommendedConversation}
            setSelectedConversation={handleSelectConversation}
          />
          <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

          <div className={styles.mainContent}>
            <ConversationList
              isLoading={isLoading}
              conversations={filteredConversations}
              setSelectedConversation={handleSelectConversation}
            />
            <ConversationDetails
              isLoading={isLoading}
              selectedConversation={selectedConversation}
              statusMessage={statusMessage}
              onAssignSuccess={handleAssignSuccess}
              onMarkInProgress={handleMarkInProgress}
              onResolve={handleResolve}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default App

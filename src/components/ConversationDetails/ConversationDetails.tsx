import { useEffect, useState } from 'react'
import type { Conversation } from '../../types/Conversation'
import styles from './ConversationDetails.module.css'

type ConversationDetailsProps = {
  isLoading: boolean
  selectedConversation: Conversation | null
  statusMessage: string
  onAssignSuccess: (updatedConversation: Conversation) => void
  onMarkInProgress: (conversation: Conversation) => void
  onResolve: (conversationId: string) => void
}

function ConversationDetails(props: ConversationDetailsProps) {
  const [isAssigning, setIsAssigning] = useState(false)
  const [assignSuccessMessage, setAssignSuccessMessage] = useState('')
  const [assignErrorMessage, setAssignErrorMessage] = useState('')

  useEffect(
    function () {
      setIsAssigning(false)
      setAssignSuccessMessage('')
      setAssignErrorMessage('')
    },
    [props.selectedConversation?.id]
  )

  if (props.isLoading) {
    return (
      <section className={styles.details}>
        <h2 className={styles.title}>Conversation Details</h2>
        <p className={styles.text}>Loading conversation details...</p>
      </section>
    )
  }

  if (props.selectedConversation === null) {
    return (
      <section className={styles.details}>
        <h2 className={styles.title}>Conversation Details</h2>
        {props.statusMessage !== '' && (
          <p className={styles.successMessage}>{props.statusMessage}</p>
        )}
        <p className={styles.text}>No conversation selected.</p>
      </section>
    )
  }

  const conversation = props.selectedConversation
  const isAlreadyAssigned = conversation.assigned === true
  const isInProgress = conversation.status === 'In Progress'
  const isAssignButtonDisabled = isAssigning || isAlreadyAssigned
  const isMarkInProgressDisabled = isAlreadyAssigned === false || isInProgress
  const isResolveDisabled = isInProgress === false

  function handleAssignClick() {
    if (isAssignButtonDisabled) {
      return
    }

    setIsAssigning(true)
    setAssignSuccessMessage('')
    setAssignErrorMessage('')

    fetch('/api/conversations/' + conversation.id + '/assign', {
      method: 'PATCH',
    })
      .then(function (response) {
        if (response.ok === false) {
          throw new Error('Assignment failed')
        }

        return response.json()
      })
      .then(function (updatedConversation: Conversation) {
        props.onAssignSuccess(updatedConversation)
        setAssignSuccessMessage('Conversation assigned successfully.')
        setIsAssigning(false)
      })
      .catch(function () {
        setAssignErrorMessage('Assignment failed. Please try again.')
        setIsAssigning(false)
      })
  }

  function handleMarkInProgressClick() {
    if (isMarkInProgressDisabled) {
      return
    }

    props.onMarkInProgress(conversation)
  }

  function handleResolveClick() {
    if (isResolveDisabled) {
      return
    }

    props.onResolve(conversation.id)
  }

  let assignButtonText = 'Assign to Me'

  if (isAlreadyAssigned) {
    assignButtonText = 'Assigned'
  } else if (isAssigning) {
    assignButtonText = 'Assigning...'
  }

  let markInProgressButtonText = 'Mark In Progress'

  if (isInProgress) {
    markInProgressButtonText = 'In Progress'
  }

  return (
    <section className={styles.details}>
      <h2 className={styles.title}>Conversation Details</h2>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Customer Information</h3>
        <p className={styles.text}>Name: {conversation.customerName}</p>
        <p className={styles.text}>Email: {conversation.email}</p>
        <p className={styles.text}>Plan: {conversation.plan}</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Issue Summary</h3>
        <p className={styles.text}>{conversation.issueSummary}</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Conversation Timeline</h3>
        {conversation.timeline.map(function (item, index) {
          return (
            <p className={styles.timelineItem} key={index}>
              {item}
            </p>
          )
        })}
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Escalation Reason</h3>
        <p className={styles.text}>{conversation.escalationReason}</p>
      </div>

      {assignSuccessMessage !== '' && (
        <p className={styles.successMessage}>{assignSuccessMessage}</p>
      )}

      {props.statusMessage !== '' && (
        <p className={styles.successMessage}>{props.statusMessage}</p>
      )}

      {assignErrorMessage !== '' && (
        <p className={styles.errorMessage}>{assignErrorMessage}</p>
      )}

      <div className={styles.actions}>
        <button
          className={styles.primaryButton}
          type="button"
          disabled={isAssignButtonDisabled}
          onClick={handleAssignClick}
        >
          {assignButtonText}
        </button>
        <button
          className={styles.secondaryButton}
          type="button"
          disabled={isMarkInProgressDisabled}
          onClick={handleMarkInProgressClick}
        >
          {markInProgressButtonText}
        </button>
        <button
          className={styles.successButton}
          type="button"
          disabled={isResolveDisabled}
          onClick={handleResolveClick}
        >
          Resolve
        </button>
      </div>
    </section>
  )
}

export default ConversationDetails

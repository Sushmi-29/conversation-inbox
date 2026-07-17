import ConversationCard from '../ConversationCard/ConversationCard'
import type { Conversation } from '../../types/Conversation'
import styles from './ConversationList.module.css'

type ConversationListProps = {
  isLoading: boolean
  conversations: Conversation[]
  selectedConversationId: string
  setSelectedConversation: (conversation: Conversation) => void
}

function ConversationList(props: ConversationListProps) {
  return (
    <section className={styles.conversationList} aria-label="Conversation list">
      <h2 className={styles.title}>Conversation List</h2>

      {props.isLoading ? (
        <p className={styles.emptyMessage}>Loading conversations...</p>
      ) : props.conversations.length === 0 ? (
        <p className={styles.emptyMessage}>No conversations found.</p>
      ) : (
        props.conversations.map(function (conversation) {
          return (
            <ConversationCard
              key={conversation.id}
              conversation={conversation}
              isSelected={props.selectedConversationId === conversation.id}
              setSelectedConversation={props.setSelectedConversation}
            />
          )
        })
      )}
    </section>
  )
}

export default ConversationList

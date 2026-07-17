import ConversationCard from '../ConversationCard/ConversationCard'
import type { Conversation } from '../../types/Conversation'
import styles from './ConversationList.module.css'

type ConversationListProps = {
  conversations: Conversation[]
  setSelectedConversation: (conversation: Conversation) => void
}

function ConversationList(props: ConversationListProps) {
  return (
    <section className={styles.conversationList}>
      <h2 className={styles.title}>Conversation List</h2>

      {props.conversations.length === 0 ? (
        <p className={styles.emptyMessage}>No conversations found.</p>
      ) : (
        props.conversations.map(function (conversation) {
          return (
            <ConversationCard
              key={conversation.id}
              conversation={conversation}
              setSelectedConversation={props.setSelectedConversation}
            />
          )
        })
      )}
    </section>
  )
}

export default ConversationList

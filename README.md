# Conversation Inbox

A frontend application that helps support agents manage escalated customer conversations. Conversations are loaded from a mocked API using MSW (Mock Service Worker). The UI is designed so agents can quickly see which conversation to handle next.

## Features

- Dashboard metrics (High Priority, Waiting >30 mins, Resolved Today)
- Search conversations by customer name
- Quick filters (High Priority, Waiting Long, Negative Sentiment, Unassigned)
- Recommended Next conversation
- Conversation details panel
- Assign to Me
- Mark In Progress
- Resolve conversation
- Loading state
- Error state with Retry
- Empty search / filter state
- Keyboard accessibility

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS Modules
- MSW (Mock Service Worker)

## Installation

```bash
git clone <repository-url>
cd conversation-inbox
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

## Project Structure

```text
src/
  components/   UI pieces such as Header, Filters, ConversationList, and ConversationDetails
  data/         Mock conversation data used by the MSW handlers
  mocks/        MSW request handlers and browser worker setup
  styles/       Global CSS styles
  types/        Shared TypeScript types
  App.tsx       Main app state, filtering, recommendation, and data fetching
  main.tsx      App entry point and MSW startup
```

## Accessibility

- Keyboard navigation for conversation cards (Tab, Enter, Space)
- Visible focus indicators on interactive elements
- Semantic HTML (`main`, `header`, `nav`, `section`)
- ARIA attributes such as `aria-label`, `aria-selected`, and `aria-pressed`

## Future Improvements

- Backend integration with a real API
- Real authentication for support agents
- Pagination for large conversation lists
- Real-time updates for new escalations
- Unit and integration tests

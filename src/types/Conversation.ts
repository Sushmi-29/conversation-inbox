export type Conversation = {
  id: string
  customerName: string
  issue: string
  priority: string
  waitingTime: string
  sentiment: string
  assigned: boolean
  email: string
  plan: string
  issueSummary: string
  timeline: string[]
  escalationReason: string
}

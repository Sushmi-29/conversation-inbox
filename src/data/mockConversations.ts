import type { Conversation } from '../types/Conversation'

export const mockConversations: Conversation[] = [
  {
    id: '1',
    customerName: 'James Wilson',
    issue: 'Payment failed after subscription renewal',
    priority: 'High',
    waitingTime: '47 mins',
    sentiment: 'Negative',
    assigned: false,
    email: 'james.wilson@email.com',
    plan: 'Premium',
    issueSummary:
      'Customer reports that payment failed after their subscription renewed. They have been charged but still see an inactive status.',
    timeline: [
      '10:12 AM - Customer started chat about payment failure',
      '10:15 AM - AI asked for order ID and payment method',
      '10:22 AM - Customer shared screenshots of the charge',
      '10:28 AM - Escalated to human agent',
    ],
    escalationReason:
      'Billing dispute with failed payment confirmation. AI could not verify the charge status and customer is waiting too long.',
  },
  {
    id: '2',
    customerName: 'Emily Chen',
    issue: 'Cannot access account after password reset',
    priority: 'High',
    waitingTime: '38 mins',
    sentiment: 'Negative',
    assigned: false,
    email: 'emily.chen@email.com',
    plan: 'Business',
    issueSummary:
      'Customer reset their password but still cannot log in. They receive an invalid credentials error even with the new password.',
    timeline: [
      '9:40 AM - Customer reported login failure',
      '9:45 AM - AI guided customer through password reset',
      '9:52 AM - Customer confirmed reset email was received',
      '10:05 AM - Login still failed, escalated to human agent',
    ],
    escalationReason:
      'Repeated login failures after a successful password reset. Account access issue needs manual verification.',
  },
  {
    id: '3',
    customerName: 'Michael Brown',
    issue: 'Refund request for cancelled order',
    priority: 'Medium',
    waitingTime: '25 mins',
    sentiment: 'Neutral',
    assigned: true,
    email: 'michael.brown@email.com',
    plan: 'Standard',
    issueSummary:
      'Customer cancelled an order three days ago and has not received the refund yet. They want an update on the refund status.',
    timeline: [
      '11:02 AM - Customer asked about missing refund',
      '11:06 AM - AI confirmed order cancellation',
      '11:10 AM - AI could not locate refund transaction',
      '11:18 AM - Escalated to human agent',
    ],
    escalationReason:
      'Refund status could not be confirmed automatically. Needs agent review of payment records.',
  },
  {
    id: '4',
    customerName: 'Sophia Martinez',
    issue: 'App crashes when uploading files',
    priority: 'Medium',
    waitingTime: '18 mins',
    sentiment: 'Negative',
    assigned: false,
    email: 'sophia.martinez@email.com',
    plan: 'Premium',
    issueSummary:
      'Customer says the mobile app crashes every time they try to upload a PDF larger than 5MB. This blocks their daily workflow.',
    timeline: [
      '12:01 PM - Customer reported app crash on upload',
      '12:05 PM - AI asked for device and app version',
      '12:12 PM - Customer shared crash screenshots',
      '12:16 PM - Escalated to human agent',
    ],
    escalationReason:
      'Technical crash issue with file uploads. AI could not provide a working workaround.',
  },
  {
    id: '5',
    customerName: 'Daniel Lee',
    issue: 'Need help changing billing address',
    priority: 'Low',
    waitingTime: '12 mins',
    sentiment: 'Positive',
    assigned: false,
    email: 'daniel.lee@email.com',
    plan: 'Standard',
    issueSummary:
      'Customer wants to update their billing address before the next invoice. They are polite and not blocked from using the product.',
    timeline: [
      '1:10 PM - Customer asked how to change billing address',
      '1:12 PM - AI shared settings instructions',
      '1:15 PM - Customer said the save button is missing',
      '1:20 PM - Escalated to human agent',
    ],
    escalationReason:
      'Billing settings UI issue. Customer cannot find the save option after following AI instructions.',
  },
  {
    id: '6',
    customerName: 'Ava Thompson',
    issue: 'Incorrect tax amount on latest invoice',
    priority: 'Low',
    waitingTime: '8 mins',
    sentiment: 'Neutral',
    assigned: true,
    email: 'ava.thompson@email.com',
    plan: 'Business',
    issueSummary:
      'Customer noticed the tax amount on their latest invoice looks higher than usual. They want confirmation that the correct tax rate was applied.',
    timeline: [
      '2:05 PM - Customer asked about invoice tax amount',
      '2:08 PM - AI explained general tax calculation',
      '2:12 PM - Customer requested invoice-level review',
      '2:14 PM - Escalated to human agent',
    ],
    escalationReason:
      'Invoice tax review requires manual check against regional billing rules.',
  },
]

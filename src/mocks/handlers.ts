import { delay, http, HttpResponse } from 'msw'
import { mockConversations } from '../data/mockConversations'

export const handlers = [
  http.get('/api/conversations', async function () {
    const delayTime = 200 + Math.floor(Math.random() * 301)
    await delay(delayTime)

    return HttpResponse.json(mockConversations)
  }),

  http.patch('/api/conversations/:id/assign', async function ({ params }) {
    const delayTime = 300 + Math.floor(Math.random() * 201)
    await delay(delayTime)

    const shouldSucceed = Math.random() < 0.7

    if (shouldSucceed === false) {
      return HttpResponse.json(
        { message: 'Assignment failed' },
        { status: 500 }
      )
    }

    const conversationId = String(params.id)
    let foundConversation = null

    for (let index = 0; index < mockConversations.length; index++) {
      if (mockConversations[index].id === conversationId) {
        foundConversation = mockConversations[index]
        break
      }
    }

    if (foundConversation === null) {
      return HttpResponse.json(
        { message: 'Conversation not found' },
        { status: 404 }
      )
    }

    foundConversation.assigned = true

    return HttpResponse.json(foundConversation)
  }),
]

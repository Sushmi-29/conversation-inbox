import { delay, http, HttpResponse } from 'msw'
import { mockConversations } from '../data/mockConversations'

export const handlers = [
  http.get('/api/conversations', async function () {
    const delayTime = 200 + Math.floor(Math.random() * 301)
    await delay(delayTime)

    return HttpResponse.json(mockConversations)
  }),
]

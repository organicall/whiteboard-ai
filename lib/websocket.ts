import Ably from 'ably/promises'

export const ably = new Ably.Realtime.Promise(process.env.ABLY_API_KEY!)

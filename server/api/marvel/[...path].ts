import CryptoJS from 'crypto-js'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  try {
    const config = useRuntimeConfig()

    const pathSegments = Array.isArray(event.context.params?.path)
      ? event.context.params?.path
      : [event.context.params?.path || '']
    const marvelPath = pathSegments.join('/')

    const url = new URL(event.req.url || '', `http://${event.req.headers.host}`)

    const ts = Date.now().toString()
    const publicKey = config.public.marvelPublicApiKey
    const privateKey = config.marvelPrivateApiKey

    if (!publicKey || !privateKey)  throw new Error('Missing Marvel API keys in runtime config')

    const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString()

    const params = new URLSearchParams(url.search)
    params.set('ts', ts)
    params.set('apikey', publicKey as string)
    params.set('hash', hash)

    const finalUrl = `https://gateway.marvel.com/v1/public/${marvelPath}?${params.toString()}`

    console.log('=== MARVEL REQUEST DEBUG ===')
    console.log('ts:', ts)
    console.log('publicKey:', publicKey)
    console.log('privateKey:', privateKey ? 'YES' : 'MISSING')
    console.log('hash:', hash)
    console.log('Final URL:', finalUrl)


    const data = await $fetch(finalUrl).catch(err => {
      console.error('Marvel API fetch failed:', err?.response || err)
      throw createError({
        statusCode: err?.response?.status || 500,
        statusMessage: err?.response?.statusText || 'Marvel API Error',
        message: err?.data?.status || 'Failed to fetch from Marvel API'
      })
    })

    return data
  } catch (e: any) {
    console.error('Marvel API error:', e)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: e.message || 'Unknown error'
    })
  }
})

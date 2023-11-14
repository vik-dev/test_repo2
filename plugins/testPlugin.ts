import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      test: () => { console.log('i`m working bitch') },
    },
  }
})

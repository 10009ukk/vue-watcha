import { createStore } from 'vuex'
import api from '@/api'

export default createStore({
  state: {
    highRating: [],
    romance: [],
    thriller: [],
    animation: []
  },
  getters: {
    getRomance(state) {
      return state.romance
    }
  },
  mutations: {
    getGenres: function(state, { highRating, romance, thriller, animation}) {
      state.highRating = highRating.data.data.movies
      state.romance = romance.data.data.movies
      state.thriller = thriller.data.data.movies
      state.animation = animation.data.data.movies
      
      console.log(state.highRating)
    }
  },
  actions: {
    getGenres: async function(context) {
      try {
        let [ highRating, romance, thriller, animation ] = await api.getGenres()
        
        context.commit('getGenres', {
          highRating,
          romance,
          thriller,
          animation
        })
      } catch(error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})

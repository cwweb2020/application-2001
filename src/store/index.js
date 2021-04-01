import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    planets:[]
  },
  mutations: {
    setPlanets(state, payload){
      state.planets=payload

      console.log(state.planets);
    }
  },
  actions: {
    fetchPlanet({commit}){
      axios
      .get('https://swapi.dev/api/planets/')
      .then(res =>{
         const datos=res.data
           commit('setPlanets',datos)
         console.log(datos);
         
          
      })
      .catch(e => console.log(e))
    }
  },
  modules: {
  }
})

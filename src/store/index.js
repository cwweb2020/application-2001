import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    planets:[],
    spaceships:[]
  },
  mutations: {
    setPlanets(state, payload){
      state.planets=payload
    },
    setSpaceships(state, payload){
      state.spaceships=payload
    }
  },
  actions: {
    fetchPlanet({commit}){
      axios
      .get('https://swapi.dev/api/planets/1')
      .then(res =>{
         const datos=res.data
           commit('setPlanets',datos)
        // console.log(datos);
         
          
      })
      .catch(e => console.log(e))
    },
    // call to spaceships
    fetchSpaceships({commit}){
      axios
      .get('https://swapi.dev/api/starships/')
      .then(res=>{
        console.log(res.data);
        const content=res.data
        commit('setSpaceships',content)
      })
      .catch(e => console.log(e))
    }
  },
  getters:{
    sp(state){
      return state.spaceships
    },
    plan(state){
      return state.planets
    }
  },
  modules: {
  }
})

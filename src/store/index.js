import Vue from 'vue'
import Vuex from 'vuex'
import  axios from 'axios'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {

    characters:[],
    currentCharacter: [],
    films:[],
    vehicles:[],    
    page: 1,
    pages: 1,        
    
  },
  mutations: {
    set_characters(state, characters){
      state.characters = characters;

    },

    set_currentCharacter(state, currentCharacter){
      state.currentCharacter = currentCharacter;
      
    }


  },
  actions: {

    getCharacters({commit}){  
      
      const params = {
        page: `${this.state.page}`
      }

      axios.get("https://swapi.dev/api/people/", {params})
      .then((res)=>{
        commit('set_characters', res.data.results) ;        
      })
    },    

    getCurrentCharacter({commit}, characterName){

        
       
      axios.get(`https://swapi.dev/api/people/${characterName}`)
      .then((res)=>{
        commit('set_currentCharacter', res.data) ;        

        this.state.films =[]
        for (let film of this.state.currentCharacter.films){
          axios.get(film)
          .then((res)=>{
          this.state.films.push(res.data.title) ;
          })
        }

      this.state.vehicles =[];
      for (let vehicle of this.state.currentCharacter.vehicles){
        axios.get(vehicle)
        .then((res)=>{
        this.state.vehicles.push(res.data.name) ;
        })
      }        
      })    
    },        
  },

  modules: {
  }
})

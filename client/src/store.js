
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user: {
        id: 1,
        userName: 'John Doe',
        gender: 'Male',
        dateOfBirth: '1990-01-01',
        address: '123 Main Street, City, Country'
      },
      users: [
        { id: 1, userName: 'John Doe', gender: 'Male', dateOfBirth: '1990-01-01', address: '123 Main Street' },
        { id: 2, userName: 'Jane Smith', gender: 'Female', dateOfBirth: '1985-05-12', address: '456 Oak Avenue' },
        { id: 3, userName: 'Alice Johnson', gender: 'Female', dateOfBirth: '1993-03-22', address: '789 Pine Road' }
      ],
      products: [
        { id: 1, name: 'Cam', price:10000,quantity:10 },
        { id: 2, name: 'Táo', price:10000,quantity:10 }
      ],
      counter:0,
      listNumberRandom:[],
      text:'Rikkei Academy',
      color:'white',
      language:{
        header:'Chuyển đổi ngôn ngữ',
        main:'Xin chào'
      },
      user:{
        id:'',
        email:'',
        password:'',
      }
    }
  },
  mutations: {
     increment(state){
      state.counter++;
     },
     decrement(state){
      state.counter--;
     },
     Add_Random_Number(state){
      const number=Math.floor(Math.random() * 100) + 1
      state.listNumberRandom.push(number)
     },
     Change_Text(state){
       state.text='Rikkei Soft'
     },
     Change_Color(state){
       state.color=state.color=='black' ? 'white' :'black'
     },
     changeLanguage(state){
      state.language.header=state.language.header=='Chuyển đổi ngôn ngữ'?'Change language':'Chuyển đổi ngôn ngữ'
      state.language.main=state.language.main=='Xin chào'?'Hello':'Xin chào'
     },
     SET_USER(state,userRegister){
         state.user=userRegister;
     }
  },
  getters:{
    userInfo(state){
        return state.user;
    },
    userList(state){
       return state.users;
    },
    productList(state){
       return state.products;
    },
    getCounter(state){
      return state.counter;
    },
    getNumbersRandom(state){
      return state.listNumberRandom;
    },
    getText(state){
      return state.text;
    }
  }
})
export default store
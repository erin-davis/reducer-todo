export const initialState = [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    },
    {
      item: 'Figure out how to initialState',
      completed: false,
      id: 69696969696
    }
  ]


export const simpleReducer = (state, action) =>{
  switch(action.type){
    case "WRITE_TODO":
      return {...state, item: action.payload, completed: false, id: new Date()};
    default:
      return state;
  }
}

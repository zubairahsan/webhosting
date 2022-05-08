
import { useSelector } from 'react-redux';
// import Hello from './hello';
import {Provider} from 'react-redux';
import store from './store/store';
import './App.css';

// let arr = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]
// const handleDel =(id)=>{
//   console.log(id)
//   let index = arr.findIndex((arr,id)=>arr.id == id);
//   console.log(index)
// }
function App() {
  const todo = useSelector((state)=> state.data);
  console.log(todo)
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        {/* <h1 style={{color:'red'}}>Hello world</h1> */}
        {/* <Hello arr={arr} handleDel={handleDel}/> */}
        {
          todo.map((todo)=>{
            return <div key={todo.id}>
                    <h3>{todo.name}</h3>
                    {
                      todo.favorite.map((fav)=>{
                        return <small key={fav}>
                          {JSON.stringify(fav)}
                        </small>
                      })
                    }
            </div>  
          })
        }
      </header>
    </div>
    </Provider>
  );
}

export default App;

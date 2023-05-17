import './app.css'
import Header from './components/Header'
import {useState} from 'react'
// import Counter from './counter'
import Employee from './employee'
function App() {
  const [count,setCount]=useState(0)
  const data='mohammed risvan'
 
  const addCount=()=>{
    setCount(count+1)
    console.log(count)

  }
  // let obj={
  //   title:'1st Counter',
  //   count,
  //   place:'hello'
  // }
  let emp=[{name:'risvan',age:21},{name:'mohammed',age:50},{name:'kili',age:21},{name:'dave',age:21}]
  return (
    <div className='sample'>
    <Header data={data}/>
    <button onClick={addCount}>add</button>
     {/* <Counter title='1st Counter' count={count}/> */}
     {/* <Counter {...obj} />
     <Counter title='2nd Counter' count={count}/> */}
{emp.map((obj,index)=>
 (
  // <Employee key={index} name={obj.name} age={obj.age}/>
  <Employee key={index} {...obj}/>
)
)}
      < Header data={data}/>
    </div>
  );
}
export default App;


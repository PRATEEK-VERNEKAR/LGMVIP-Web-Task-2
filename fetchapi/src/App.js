import './App.css';
import {useState} from 'react';
import Header from './Header';

function App() {
  const [students,setStudents]=useState([]);

  const handleCallback=(childData)=>{
    setStudents(childData.data);
  }
  

  return (
    <div className="App">
      <Header parentCallback={handleCallback}/>
      <div className='display'>
        {
          students.map((data,index)=>{
            return(
              <div className='card' key={index}>
                <p>{data.first_name} {data.last_name}</p>
                <p>{data.email}</p>
                <img src={data.avatar} width={'200px'} height={'200px'} alt='profile'></img>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

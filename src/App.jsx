import users from './users.json'
import {useState} from 'react'


function App() {
  // ======================== Random Users ========================

    const random = Math.floor(Math.random() * users.length)
    const [index, setIndex] = useState (random)
    const randomUser = () => {
      const randomCard = Math.floor(Math.random() * users.length)
      setIndex(randomCard)
    }

    //======================  Random Colors =========================

    const colors = [
      '#5E9DC2',
      '#648DBF',
      '#727CB5',
      '#8368A3',
      '#90548B',
      '#97406C',
    ]

      const randomColor = Math.floor(Math.random() * colors.length)
      document.body.style= `background: ${colors[randomColor]}`



   return(
    <div className='cardContent'>
      <h1 className='name' style={{color: colors[randomColor]}}>
       {users[index].name.title}
       {users[index].name.first}
       {users[index].name.last}
      </h1>
      <img src={users[index].picture.large} alt="UserImg"/>
      <h1>{users[index].email}</h1>
      <button onClick={randomUser} style={{background: colors[randomColor]}} >Cambiar Usuario</button>
    </div>
   )
}

export default App

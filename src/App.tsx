import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserCard } from './components/UserCard/UserCard'
import { SearchBar } from './components/SearchBar/SearchBar'
import type { User } from './types'



const users :User[] = [
  {
    id: 1,
    name: 'armughan',
    email: 'armughan.ahmed@yahoo.com',
  },
  {
    id: 2,
    name: 'hassan',
    email: 'hassan.ahmed@yahoo.com',
  },
  {
    id: 3,
    name: 'jamali',
    email: 'jamali.ahmed@yahoo.com',
  },
]



function App() {
const [query, setQuery] = useState('');

const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()))
  return (
    <div>
      <SearchBar onQueryChange={setQuery}/>
      {filteredUsers.map(user =>(
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  )
}

export default App

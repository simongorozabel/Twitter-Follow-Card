import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'freddier',
      name: 'Freddy Vega',
      isFollowing: false
    },
    {
      userName: 'simongorozabel',
      name: 'Simón Gorozabel',
      isFollowing: true
    },
    {
      userName: 'elonmusk',
      name: 'Elon Musk',
      isFollowing: false
    }
  ]

function App() {

  return (
    <section className='App'>
    {
      users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          name={name}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))
    }
  </section>
)
}

export default App;

import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

function App() {

  return (
    <section className="App">
      <TwitterFollowCard
        initialIsFollowing={true}
        userName="simongorozabel"
        name="Simon Gorozabel"
      />
      <TwitterFollowCard
        userName="midudev"
        name="Miguel Ángel Durán"
      />
      <TwitterFollowCard
        userName="freddier"
        name="Freddy Vega"
      />
      <TwitterFollowCard
        userName="elonmusk"
        name="Elon Musk"
      />
    </section>
  );
}

export default App;

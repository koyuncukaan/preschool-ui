import { useAppSelector, useAppDispatch } from "./hooks";
import { getPlayers } from "./features/player/playerSlice";
import { useEffect } from "react";
import Players from "./components/Players";

function App() {
  const { isLoading } = useAppSelector((store) => store.player);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPlayers());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Players />
      {/* {players.map((player, index) => {
        return <h3 key={index}>{player.age}</h3>;
      })} */}
    </>
  );
}

export default App;

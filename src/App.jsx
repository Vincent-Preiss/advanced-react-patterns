import ComplicatedCounter from "./compoundComponents/complicatedExample/complicatedCount";
import Counter from "./compoundComponents/simpleExample/Counter";
import HOCExample from "./higherOrderComponents/HOCExample";
import { ListExample } from "./renderPropPattern/ListExample";

function App() {
  return (
    <>
      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Increase icon="+" />
        <Counter.Count />
      </Counter>
      <div>
        <ComplicatedCounter>
          <ComplicatedCounter.Label>
            My super flexible counter
          </ComplicatedCounter.Label>
          <ComplicatedCounter.Increase icon="+" />
          <ComplicatedCounter.Count />
          <ComplicatedCounter.Decrease icon="-" />
        </ComplicatedCounter>
      </div>
      <ListExample />
      <HOCExample />
    </>
  );
}

export default App;

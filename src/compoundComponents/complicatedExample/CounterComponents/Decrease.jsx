import { useCounter } from "../complicatedCount";

export function Decrease({ icon }) {
  const { decrease } = useCounter();
  return <button onClick={decrease}>{icon}</button>;
}

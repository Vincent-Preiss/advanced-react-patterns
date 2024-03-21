import { useCounter } from "../complicatedCount";

export function Increase({ icon }) {
  const { increase } = useCounter();
  return <button onClick={increase}>{icon}</button>;
}

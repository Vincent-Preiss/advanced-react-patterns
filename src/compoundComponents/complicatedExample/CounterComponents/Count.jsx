import { useCounter } from "../complicatedCount";

export function Count() {
  const { count } = useCounter();
  return <span>{count}</span>;
}

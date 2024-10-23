import Counter from "./components/Counter";
import ListManager from "./components/ListManger";

export default function App() {
  return (
    <main className="p-4">
    <h1 className="text-3xl font-bold underline">
      Redux Tutorial !
    </h1>
    <Counter/>
    <ListManager/>
    </main>
  )
}
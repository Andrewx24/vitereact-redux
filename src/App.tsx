 import Counter from '../components/Counter'
 import Pizza from '../components/Pizza'
import   Namelist from '../components/Namelist'


export default function App() {
  return (
    <main className="p-4">
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Counter/>
    <Pizza/>
    <Namelist/>
    </main>
  )
}
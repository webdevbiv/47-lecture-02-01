import Button, { ButtonWithStyled } from './components/Button/Button';
import ListItem from './components/ListItem/ListItem';
import { ButtonAnother } from './components/Button/Button';
import Input from './components/Input/Input';
import './App.css';

function App() {
  const students = [
    { name: 'Peter', age: 23 },
    { name: 'Alisa', age: 22 },
    { name: 'Steve', age: 34 },
    { name: 'Alex', age: 45 },
    { name: 'Maggy', age: 30 },

  ]
  return (
    <div className="App">
      <Input
        name="name"
        type="text"
        value="nateliya"
        disabled={true}
        check
      />
      <div>test</div>
      <Button
        btnText='new button'
        disabled={false}
        loader
      />
      <Button btnText='click me' />
      <Button btnText='press me' />
      <br />
      {/* <ButtonAnother /> */}
      <ButtonWithStyled
        text="Best Styled Component"
      />
      {
        students.map(item => (<ListItem name={item.name} age={item.age} key={item.name} />))
      }
    </div>
  );
}

export default App;

import './App.css';
import { increase ,greenBackground,yellowBackground,redBackground } from './actions';
import { decrease } from './actions';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const val=useSelector((state) =>state.updateValue);
  const col=useSelector((state) => state.updateColor);
  const dispatch=useDispatch();
  return (
    <div className='main-box' style={{backgroundColor:col}}>
    <h2>Redux Counter App</h2>
    <br/>
    <br/>
    <button onClick={() =>dispatch(decrease())}>-</button>
    <input type='text' value={val} readOnly/>
    <button onClick={() =>dispatch(increase())}>+</button>
    <br/>
    <h2>COLOR CHANGER APP</h2>
    <button onClick={() =>dispatch(redBackground())}>RED</button>
    <button onClick={() =>dispatch(yellowBackground())}>YELLOW</button>
    <button onClick={() =>dispatch(greenBackground())}>GREEN</button>
    </div>
    
  );
}

export default App;

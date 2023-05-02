import styles from "./App.module.css";
import { useState, useEffect } from "react";


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log('I run only once.');
  }, []); // only the first time

  useEffect(() => {
    console.log("I run when 'keyword' changes", keyword);
  }, [keyword]); // only when keyword change

  useEffect(() => {
    console.log("I run when 'counter' changes", counter);
  }, [counter]);

  useEffect(() => {
  console.log("I run when keyword & counter changes");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder="Search here ... "/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;

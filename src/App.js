import { useEffect, useState } from "react";


function App() {
  const [data, setData] = useState([{}]);

  useEffect( ()=>{
    const getData = async () => {
      const response = await fetch("https://api.github.com/users/abdul-hannan232/repos")
      const value = await response.json();

      console.log(value, "value");
      setData(value);
    }

    getData();


    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then( (response)=> response.json() )
    // .then ( response => {
    //   console.log(response, "response");
    //   setThen(response);
    // } )


  }, [] );

  return (
    <div className="App">
        <h1>Hello World</h1>

        <ul>

          {data.map( (repos, index) => {
            
            return <li key={index}> {repos.name}  </li>

          })}

        </ul>

    </div>
  );
}

export default App;

import { useEffect } from 'react';
import axios from 'axios';

function App () {
    useEffect(() => {
      axios({
        method: 'POST',
        url: '/'
      }).then((response) => {
        console.log('Response: ', response.data)
      }).catch((error) => {
        console.log('Error: ', error)
      })
    }, [])

    

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">APP</h1>
        </header>
      </div>
    );
  
}

export default App;

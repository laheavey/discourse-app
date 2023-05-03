import { useEffect, useState } from 'react';
import axios from 'axios';

function App () {
  const [accessToken, setAccessToken] = useState('');
  const testAlbum = '7iLuHJkrb9KHPkMgddYigh';
  
  useEffect(() => {
    fetchToken();
    fetchAlbum()
  }, [])

  const fetchToken = () => {
    axios({
      method: 'POST',
      url: '/'
    }).then((response) => {
      // console.log('Response in App.js: ', response.data.access_token)
      setAccessToken(response.data.accessToken);
    }).catch((error) => {
      console.log('Error: ', error)
    })
  }

  const fetchAlbum = () => {
    axios({
      method: 'GET',
      url: '/albums'
    }).then((response) => {
      console.log('Response in Album/App.js: ', response.data.items)
    }).catch((error) => {
      console.log('Error: ', error)
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">APP</h1>
        </header>
      </div>
    );
  
}

export default App;

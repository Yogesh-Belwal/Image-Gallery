import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import BreadCrumb from './components/Breadcrumb';
import { getImages } from './services/api';
import Images from './components/Images';
import SnackBar from './components/SnackBar';

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [count, setCount] = useState(100);
  const [open, toggleSnack] = useState(false);

  useEffect(() => {
    if(count < 3 || count > 200){
      toggleSnack(true);
      return;
    }
    toggleSnack(false);

    const getData = async () => {
      await getImages(text, count).then(response => {
        setData(response.data.hits);
      }); 
    }
    getData();
  }, [text, count])
  
  const onTextChange = (text) => {
    setText(text);
  }

  return (
    <div className="App">
      <NavBar/>
      <BreadCrumb onTextChange={onTextChange}/>
      <Images data={data}/>
      <SnackBar open={open} toggleSnack={toggleSnack} />
    </div>
  );
}

export default App;

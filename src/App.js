import React, { useEffect, useState } from 'react';
import './App.css';
import { request } from 'graphql-request';


import Header from './screens/header';
import Home from './screens/home';
import Loren from './screens/loren';
import From from './screens/from';
import Suspendisse from './screens/Suspendisse';

function App() {

  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { site } = await request(
        'https://api-eu-central-1.graphcms.com/v2/ckg7zl59eoehs01z65ubm50jp/master',
        `
      { 
        site(where: {id: "ckg809zso08zg0154sdp5xova"}) {
          pagina {
            nome
            fragmento {
              singleText
              nome
            }
          }
        }
      }
    `
      );

      setList(site);
    };
    fetchProducts();
  }, []);


  return (
    <div className="App">
      <Header />
      <Home fragmento={list}/>
      <Loren fragmento={list}/>
      <From fragmento={list}/>
      <Suspendisse fragmento={list}/>      
    </div>
  );
}

export default App;

import React from 'react';
import YoutubeForm from './component/YoutubeForm';
import Youtube from './component/Youtube';
import Header from './component/Header';
import "./App.css";
import YoutubeVidContextProvider from './contexts/YoutubeVidContext';

export default function App() {
  
  return (
    <div className="App">
      <YoutubeVidContextProvider>
        <Header />
        <YoutubeForm />
        <Youtube />
        
      </YoutubeVidContextProvider>
    </div>
  );
}

 

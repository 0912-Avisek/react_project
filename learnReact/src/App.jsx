import { useState} from 'react';
import React from 'react';
import UseEff from '../hooks/useEff';
import Card from '../components/Card.jsx';

function App() {

  
  return (
    <>
    <UseEff />
    {/*  props are passed  1. how to send variable in props */}
    <Card title="Avisek Plan" description="Perfect for beginners" price={10} />
    <Card title="ReAvise Plan" description="Best for advanced users" price={20} isGold={true} />
    </>
     
  )
}

export default App

import React from 'react';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <>
      <Button  
        //disabled='disable'
        type={'outline'}
        size={'normal'}
        >Button</Button>

      <Input
        placeholder="Placeholder"
        state={'disable'}
      />  
    </>
  );
}

export default App;

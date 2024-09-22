
import Alert from "./component/Alert";
import Button from "./component/Button";
import { useState } from 'react'

function App() {

  const [alertVisible, setAlertVisible] = useState(false);


  return (
    <>
      {
        alertVisible &&
        <Alert onClose={() => setAlertVisible(false)}>
          Hello world alert!
        </Alert>
      }

      <Button type='primary' onClick={() => setAlertVisible(true)}>
        Show Alert
      </Button>
    </>
  );
}

export default App;

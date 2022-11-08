import { useState } from "react";
import Form from "./components/Form";
import RecipeList from "./components/RecipeList";



function App() {

  const [pseudo, setPseudo] = useState('');
  const [isOnline, setIsOnline] = useState(false);
  

  return (
    <div className="App">
       {
       isOnline ? (
     
       <RecipeList pseudo={pseudo}/>
        ) : (
          <Form pseudo={pseudo} setPseudo={setPseudo} setIsOnline={setIsOnline}/>        )
    }

    </div>
  );
}

export default App;

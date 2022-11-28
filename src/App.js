import { Route, Routes } from "react-router-dom";
import Home from "./MIDLAB/Home";
import News from "./MIDLAB/News";
import Team from "./MIDLAB/Team";


function App() {
  return (
    <div>
      <Routes>


    <Route path='/'  element={<Home/>}/>
    <Route path='/Team' element={<Team/>}/>
    <Route path='/Views' element={<News/>}/>

      </Routes>

      





    </div>
  );
}

export default App;

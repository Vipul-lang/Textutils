
import { useState } from 'react'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 
  const [mode,setMode]=useState('light');  //whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);

  const showAlert=(message, type) =>
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  function toggleMode()
  {
    if(mode === "light")
    {
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled","success")
      document.title='TextUtils - Dark Mode';

      // setInterval(()=>
      // {
      //   document.title='TextUtils - Dark Mode';
      // },2000)

      // setInterval(()=>
      //   {
      //     document.title='Install TextUtils Now';
      //   },1500)
    }

    else
    {
      setMode('light');
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success")
      document.title='TextUtils - Light Mode';
    }
  }

  return (
    <>
    <Router>
      {/* <Navbar title="TextUtils2"/>  */}
     
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>   
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        {/* /users --> Components 1
        /users/home --> Components 2 */}
      <Route exact path="/about" element={<About mode={mode} />} />
      <Route exact path="/" element={
        <TextForm showAlert={showAlert} heading=" Try TextUtils - Word Counter Character Counter, Remove extra Spaces" mode={mode} />
      } />
    </Routes>
       {/* <About/> */}
      </div>
      </Router>  
    </>
  )
}

export default App

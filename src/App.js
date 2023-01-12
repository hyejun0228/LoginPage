import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "components/LoginPage";
import MainPage from "components/MainPage";
import SignUpPage from "components/SignUpPage"
import NotFound from "components/NotFound";

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path='/loginpage' element={<LoginPage />}/>
          <Route path='/signuppage' element={<SignUpPage />}/>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
  
export default App;
  
  


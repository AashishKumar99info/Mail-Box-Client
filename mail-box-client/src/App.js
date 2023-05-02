import { useSelector } from "react-redux";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import { Route, Routes } from "react-router-dom";
import ComposeEmail from "./components/Pages/Home/ComposeEmail";
import Header from "./components/Pages/Home/Header";

function App() {
  const isLogin = useSelector(state=> state.auth.userAuth.isLogin);
  console.log(isLogin)


  return (
    <>
    <Header></Header>
    <Routes>
      {!isLogin && <Route path={'/'} element={<LoginSignup></LoginSignup>}></Route>}
      {isLogin && <Route path={'/compose-email'} element={<ComposeEmail/>}></Route>}
      {!isLogin && <Route path={'*'} element={<LoginSignup/>}></Route>}
      {isLogin && <Route path={'*'} element={<ComposeEmail />}></Route>}

    </Routes>

    </>
  );
}

export default App;

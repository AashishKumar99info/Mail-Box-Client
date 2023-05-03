import { useSelector } from "react-redux";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import { Route, Routes } from "react-router-dom";
import ComposeEmail from "./components/Pages/Home/ComposeEmail";
import Header from "./components/Pages/Home/Header";
import InboxPage from "./components/Pages/Inbox/InboxPage";
import ViewMessage from "./components/Pages/Inbox/ViewMessagePage";


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
      {/* <Route path="inbox" element={<InboxPage/>}></Route> */} {/* this line must be added in the previouse commit*/} 
      {isLogin&& <Route path="/inbox" element={<InboxPage/>}></Route> }
      {isLogin&& <Route path="/inbox/:sentmail" element={<InboxPage/>}></Route> }
      <Route path="/inbox/message/:id" element={<ViewMessage/>}></Route>
      <Route path="/inbox/:sentbox/message/:id" element={<ViewMessage/>}></Route>

    </Routes>

    </>
  );
}

export default App;

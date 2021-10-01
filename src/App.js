import logo from './logo.svg';
import './App.css';
import Friends from './components/Friends/Friends';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/About/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Culture from './components/Culture/Culture';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
   <Router>
   <Header></Header>
     <Switch>
     <Route exact path="/">
       <Home></Home>
     </Route>
     <Route path="/home">
       <Home></Home>
       </Route>
       <Route path="/friends">
       <Friends></Friends>
       </Route>
       <Route path="/friend/:friendId">
         <FriendDetail></FriendDetail>
       </Route>
       <Route path="/post/:postId">
         <PostDetails>
         </PostDetails>
         </Route>
       <Route exact path="/about">
       <About></About>
       </Route>
       <Route exact path="/about">
         <Culture></Culture>
       </Route>
       <Route path="*">
         <NotFound></NotFound>
       </Route>
     </Switch>
   </Router>
    </div>
  );
}

export default App;

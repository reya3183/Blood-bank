import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './Components/Registration/SignIn';
import { createContext, useState } from 'react';
import NoMatch from './Components/NoMatch/NoMatch';
import SignUp from './Components/Registration/SignUp';
import BloodGroup from './Components/BloodGroup/BloodGroup';
import ContactInfo from './Components/ContactInfo/ContactInfo';
import ExtraInfo from './Components/ExtraInfo/ExtraInfo';
import StartJourney from './Components/StartJourney/StartJourney';
import Home from './Components/Home/Home';
import Request from './Components/Request/Request';
import FeedBack from './Components/FeedBack/FeedBack';
import Profile from './Components/Profile/Profile';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Update from './Components/Update/Update';

export const UserContext = createContext();

function App() {
  const [signedUser, setSignedUser] = useState({});
  const [donors, setDonors] = useState({});
  const [request, setRequest] = useState({});
  const [profileData, setProfileData] = useState({});
  const [user, setUser] = useState({
    signedIn: true,
    name: '',
    email: '',
  });
  return (
    <UserContext.Provider
      value={{
        signedUser,
        setSignedUser,
        user,
        setUser,
        request,
        setRequest,
        profileData,
        setProfileData,
        donors,
        setDonors,
      }}
    >
      <Router>
        <Switch>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>
          <Route exact path='/'>
            <SignIn></SignIn>
          </Route>
          <Route path='/group'>
            <BloodGroup></BloodGroup>
          </Route>
          <Route path='/contact'>
            <ContactInfo></ContactInfo>
          </Route>
          <Route path='/extra'>
            <ExtraInfo></ExtraInfo>
          </Route>
          <Route path='/start'>
            <StartJourney></StartJourney>
          </Route>
          {/* <PrivateRoute path='/home'>
            <Home></Home>
          </PrivateRoute> */}
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/request'>
            <Request></Request>
          </Route>
          <Route path='/feedback'>
            <FeedBack></FeedBack>
          </Route>
          <Route path='/profile'>
            <Profile></Profile>
          </Route>
          <Route path='/update'>
            <Update></Update>
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

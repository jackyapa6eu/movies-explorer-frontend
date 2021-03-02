import React from 'react';
import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LandinSection from '../LandingSection/LandingSection';
import About from '../About/About';
import Tech from '../Tech/Tech';
import Student from '../Student/Student';
import Promo from '../Promo/Promo';
import Movies from '../Movies/Movies';
import initialFilms from '../../utils/films';
import initialSavedFilms from '../../utils/savedFilms';
import Profile from '../Profile/Profile';
import User from '../User/User';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import MobileMenu from '../MobileMenu/MobileMenu';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const [isMobileMenuOpened, setisMobileMenuOpened] = React.useState(false);
  const location = useLocation();
  function handleMovieBtnClick() {
    console.log('MOVIE');
  }

  function handleSavedMovieBtnClick() {
    console.log('SAVED MOVIE');
  }
  return (
    <div className="App">
      <Header
        setisMobileMenuOpened={setisMobileMenuOpened}
      />
      <Switch>
        <Route exact path="/">
          <main className="landing">
            <Promo/>
            <LandinSection id="about" title="О проекте">
              <About/>
            </LandinSection>
            <LandinSection id="tech" title="Технологии" type="tech">
              <Tech/>
            </LandinSection>
            <LandinSection id="student" title="Студент">
              <Student/>
            </LandinSection>
          </main>
        </Route>
        <Route path="/movies">
          <Movies movies={initialFilms} handleMovieBtnClick={handleMovieBtnClick}/>
        </Route>
        <Route path="/saved-movies">
          <Movies
            movies={initialSavedFilms}
            isSaved={true}
            handleMovieBtnClick={handleSavedMovieBtnClick}
          />
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/signin">
          <User title={'Рады видеть!'}>
            <SignIn/>
          </User>
        </Route>
        <Route path="/signup">
          <User title={'Добро пожаловать!'}>
            <SignUp/>
          </User>
        </Route>
        <Route path="/*">
          <PageNotFound/>
        </Route>
      </Switch>
      {location.pathname !== '/profile' && <Footer/>}
      <MobileMenu
        setisMobileMenuOpened={setisMobileMenuOpened}
        isMobileMenuOpened={isMobileMenuOpened}
      />
    </div>
  );
}

export default App;

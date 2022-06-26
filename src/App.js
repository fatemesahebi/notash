import {lazy, Suspense, useEffect, useState} from 'react';
import './App.css';
import {connect} from "react-redux";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {routes} from 'routes'
import Cookies from 'universal-cookie';
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';
import {theme} from "assets/theme"
import {StyleSheetManager} from 'styled-components';
import rtlPlugin from 'stylis-plugin-rtl';
import {create} from 'jss';
import rtl from 'jss-rtl';
import {ToastContainer} from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import {setUserInfo} from "redux/reducers/Authentication"
import {StylesProvider, jssPreset} from '@mui/styles';
const Login = lazy(() => import('pages/Login'))
const MainLayout = lazy(() => import('components/core/MainLayout'))

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});
//


function App(props) {
  const {setUserInfo}=props
  const cookies = new Cookies();


  useEffect(() => {
    const userInfo = cookies.get("userInfo")? cookies.get("userInfo") : null
    if (window.location.pathname !== `/login`) {

      if(!!userInfo)  setUserInfo(userInfo)
      else window.location.href="/login"

    }

  }, [])



  return (
      <div dir={'rtl'}>
        <div className="mainLoading"></div>
        <ToastContainer
            position="bottom-right"
            autoClose={1000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
        />
        <StylesProvider jss={jss}>
          <StyleSheetManager stylisPlugins={[rtlPlugin]}>
            <ThemeProvider theme={theme}>
              <CssBaseline/>

              <Suspense fallback={null}>

                <BrowserRouter>

                  <Routes>

                      // (localStorage.getItem("userInfo") === "undefined" || localStorage.getItem("userInfo") === null) ?
                          <Route
                              element={<MainLayout/>}>
                            {routes.map((route, i) => {
                              return route.component ? (
                                  <Route
                                      key={route.component}
                                      exact={true}
                                      path={`${route.path}`}
                                      element={<route.component/>}
                                  />
                              ) : null
                            })}

                          </Route>

                    <Route path="/login" element={<Login/>}/>
                    <Route
                        path="*"
                        element={<Navigate to="/login" replace/>}
                    />
                  </Routes>
                </BrowserRouter>
              </Suspense>
            </ThemeProvider>
          </StyleSheetManager>
        </StylesProvider>
      </div>
  );
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfo: (data) => dispatch(setUserInfo(data)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { ContactsPage } from 'pages/ContactsPage';
import { Login } from 'pages/Login';
import { Registration } from 'pages/Registartion';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { PrivateRoute } from './PrivateRouth';
import { RestrictedRoute } from './RestrictedRoute';
import { selectIsFetchingCurrent } from 'redux/auth/authSelectors';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(selectIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrent && (
      <>
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/registration"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Registration />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      </>
    )
  );
};

import React, { useState, useEffect, useCallback } from "react";
import { getProfile } from "../actions/getProfile";

export const AUTH_TOKEN = "AUTH_TOKEN";


const emptyState = {
  isAuthenticated: null,
  userprofile: null,
  authenticate: () => { },
  deauthenticate: () => { },
};

const UserStateContext = React.createContext(emptyState);

const tokenExist = function () {
  return !!localStorage.getItem(AUTH_TOKEN);
};

export function UserProvider({ children }) {
  const [state, setState] = useState(emptyState);

  const fetchProfile = useCallback(async function () {
    try {
      const request = await getProfile();

      setState({
        userprofile: request.data,
        isAuthenticated: true,
      });
    } catch {
      setState({
        isAuthenticated: false,
        userprofile: null,
      });
    }
  });

  // TODO: check token validity
  useEffect(() => {
    if (tokenExist()) {
      fetchProfile();
    } else {
      setState({
        isAuthenticated: false,
        userprofile: null,
      });
    }
  }, []);

  const actions = {
    authenticate: (token) => {
      localStorage.setItem(AUTH_TOKEN, token);

      fetchProfile();
    },
    deauthenticate: () => {
      setState({
        isAuthenticated: false,
        userprofile: null,
      });

      localStorage.removeItem(AUTH_TOKEN);
    },
  };

  return (
    <UserStateContext.Provider value={{ ...state, ...actions }}>
      {children}
    </UserStateContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(UserStateContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a UserProvider");
  }

  return context;
}

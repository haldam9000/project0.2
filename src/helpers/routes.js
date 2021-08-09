import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, FIFA, ...restProps }) {
    return (
        <Route
            {...restProps}
            render={() => {
                if (!user) {
                    return FIFA;
                }
                
                if (user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath,
                            }}
                        />
                    );
                }
            
            return null;
        }}
        />
    )
}

export function ProtectedRoute({ user, FIFA, ...restProps }) {
    return (
        <Route
            {...restProps}
            render={({ location }) => {
                if (user) {
                    return FIFA;
                }
                
                if (!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: 'signin',
                                state: { from: location },
                            }}
                        />
                    );
                }
                
                return null;
            }}
        />
    )
}

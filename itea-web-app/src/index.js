import React from "react";
import { render } from "react-dom";
import { AuthProvider } from "@asgardeo/auth-react";
import App from "./App";

const Index = () => (
    <AuthProvider

    // config={ {
    //   signInRedirectURL: "http://localhost:3000",
    //   signOutRedirectURL: "http://localhost:3000",
    //   clientID: "jweDabmkfrTPx2oQaSgEBijWQXUa",
    //   baseUrl: "https://api.asgardeo.io/t/wathsalyagamage",
    //   scope: [ "openid","profile" ]
    // } }

    config={ {
        signInRedirectURL: "https://420d584e-dd02-49b1-879e-78821d099417.e1-us-east-azure.choreoapps.dev/",
        signOutRedirectURL: "https://420d584e-dd02-49b1-879e-78821d099417.e1-us-east-azure.choreoapps.dev/",
        clientID: "jweDabmkfrTPx2oQaSgEBijWQXUa",
        baseUrl: "https://api.asgardeo.io/t/wathsalyagamage",
        scope: [ "openid","profile" ]
    } }





    >
        <App/>
    </AuthProvider>
);

render((<Index />), document.getElementById("root"));
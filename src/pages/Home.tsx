import React from "react";
import { auth, firebase } from "../utils/Firebase";
import FirebaseAuthUI from "react-firebaseui-localized";

// styles
import { Container } from "./Home.styled";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/router",
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
};

const Home = () => {
  return (
    <Container>
      <h1 style={{ marginBottom: 10 }}>BIENVENIDO</h1>
      <FirebaseAuthUI
        lang="es_419"
        config={uiConfig}
        auth={auth}
        firebase={firebase}
      />
    </Container>
  );
};

export default Home;

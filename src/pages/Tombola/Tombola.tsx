import React, { useState, useEffect } from "react";

// utils
import { auth, db } from "../../utils/Firebase";

// styled
import { Container, Boton } from "./Tombola.styled";

const usersRef = db.collection("usuarios");
const tombolaRef = db.collection("tombola");

function shuffle(arra1: number[]) {
  let ctr = arra1.length;
  let temp;
  let index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

const Tombola = () => {
  const [user, setUser] = useState<undefined | string>();
  const [userNum, setUserNum] = useState<undefined | number>();

  auth.onAuthStateChanged((user) => {
    if (user) {
      const { uid } = user;
      setUser(uid);
    }
  });

  const getUserNum = async () => {
    const data = (await usersRef.doc(user).get()).data();
    setUserNum(data?.num);
  };

  useEffect(() => {
    if (user) {
      getUserNum();
    }
    // eslint-disable-next-line
  }, [user]);

  const sacarNum = async () => {
    if (!userNum) {
      const data = (await tombolaRef.doc("numsdoc").get()).data();
      const nums = data?.numeros;
      let shuffledArray = shuffle(nums);
      const newNum = shuffledArray.pop();
      tombolaRef.doc("numsdoc").set({ numeros: shuffledArray });
      usersRef.doc(user).set({ num: newNum });
      setUserNum(newNum);
    }
  };

  return (
    <Container>
      <Boton onClick={sacarNum}>
        {!userNum ? "Sacar mi número" : `Tu número es: ${userNum}`}
      </Boton>
    </Container>
  );
};

export default Tombola;

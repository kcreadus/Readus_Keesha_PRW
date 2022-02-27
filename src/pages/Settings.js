import React, { useState, useEffect } from "react";
import Header from "./Header";
import UserForm from "../components/UserForm";

function Settings() {
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch("https://randomuser.me/api/");

      const data = await response.json();
      const [user] = data.results;
      /*
      const [user] = data.results.results.map((user) =>
        setuserData({
          userName: `${user.login.username}`,
          fName: `${user.name.first}`,
          lName: `${user.name.last}`,
          address: `${user.location.street}`,
          city: `${user.location.city}`,
          state: `${user.location.state}`,
          zipCode: `${user.location.postcode}`,
          pNumber: `${user.phone}`,
          password: `${user.login.password}`,
        })
      ); //   console.log(user)*/
      setuserData(user);
    }
    fetchAPI();
  }, []);

  return (
    <section style={styles.container}>
      <Header pgTitle="Settings" />
    {userData && <UserForm
    avatar={userData.picture.thumbnail}
     userName={userData.login.username}
     fName={userData.name.first}
     lName={userData.name.last}
     address={userData.location.street.name}
     city={userData.location.city}
     state={userData.location.state}
     zipCode={userData.location.postcode}
     pNumber={userData.phone}
     password={userData.login.password}
    />
    }
      
    </section>
  );
}
export default Settings;
const styles = {
  container: {
    display: "flex,",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
  },
};

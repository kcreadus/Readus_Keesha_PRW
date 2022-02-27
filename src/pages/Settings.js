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
      setuserData(user);
    }
    fetchAPI();
  }, []);

  return (
    <section style={styles.container}>
      <Header pgTitle="Settings" />
      {userData && (
        <UserForm
          avatar={userData.picture.medium}
          userName={userData.login.username}
          fName={userData.name.first}
          lName={userData.name.last}
          address={
            userData.location.street.number +
            " " +
            userData.location.street.name
          }
          city={userData.location.city}
          state={userData.location.state}
          zipCode={userData.location.postcode}
          pNumber={userData.phone}
          password={userData.login.password}
        />
      )}
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

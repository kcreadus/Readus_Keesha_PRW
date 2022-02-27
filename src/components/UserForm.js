import React from "react";

const UserForm = (props) => {
  return (
    <div style={styles.pForm}>
      <div>
        <img src={props.avatar} alt="profile" />
        <input type="text" value={props.userName} placeholder="User Name:" />
      </div>
      <form>
        <div style={styles.input2}>
          <input type="text" value={props.fName} placeholder="First Name:" />
          <input type="text" value={props.lName} placeholder="Last Name:" />
        </div>
        <div style={styles.input1}>
          <input type="text" value={props.address} placeholder="Address:" />
        </div>
        <div style={styles.input2}>
          <input type="text" value={props.city} placeholder="City:" />
          <input type="text" value={props.state} placeholder="State:" />
        </div>
        <div style={styles.input2}>
          <input type="text" value={props.zipCode} placeholder="Postal Code:" />
          <input
            type="text"
            value={props.pNumber}
            placeholder="Phone Number:"
          />
        </div>
        <div style={styles.input1}>
          <input type="text" value={props.password} placeholder="Password:" />
        </div>
      </form>
    </div>
  );
};

export default UserForm;

const styles = {
  pForm: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    height: "60%",
    backgroundColor: "whiteSmoke",
    color: "black",
  },
  input1: {
    display: "flex",
  },
  input2: {
    display: "flex",
  },
};

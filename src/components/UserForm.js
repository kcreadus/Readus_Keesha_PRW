import React from "react";

const UserForm = (props) => {
  return (
    <div style={styles.pForm}>
      <div>
        <img src={props.avatar} alt="profile" />
        <input type="text" value={props.userName} placeholder="User Name:" />
      </div>
      <form>
        <div style={styles.inputContainer}>
          <input
            type="text"
            style={styles.input2}
            value={props.fName}
            placeholder="First Name:"
          />
          <input
            type="text"
            style={styles.input2}
            value={props.lName}
            placeholder="Last Name:"
          />
        </div>
        <div>
          <input
            type="text"
            style={styles.input1}
            value={props.address}
            placeholder="Address:"
          />
        </div>
        <div style={styles.inputContainer}>
          <input
            type="text"
            style={styles.input2}
            value={props.city}
            placeholder="City:"
          />
          <input
            type="text"
            style={styles.input2}
            value={props.state}
            placeholder="State:"
          />
        </div>
        <div style={styles.inputContainer}>
          <input
            type="text"
            style={styles.input2}
            value={props.zipCode}
            placeholder="Postal Code:"
          />
          <input
            type="text"
            style={styles.input2}
            value={props.pNumber}
            placeholder="Phone Number:"
          />
        </div>
        <div>
          <input
            type="text"
            style={styles.input1}
            value={props.password}
            placeholder="Password:"
          />
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
    backgroundColor: "#7785AC",
    color: "black",
  },
  input1: {
    display: "flex",
    width: "91%",
    padding: "10px",
    fontWeight: "normal",
    background: "none",
    border: "1px solid #8FA4B9",
    color: "#fff",
    outline: "none",
    fontSize: "14px",
    marginTop: "2%",
    marginRight: "2%",
    marginBottom: "2%",
    marginLeft: "2%",
    transition: "0.5s all",
  },
  input2: {
    display: "flex",
    width: "42%",
    padding: "10px",
    fontWeight: "normal",
    background: "none",
    border: "1px solid #8FA4B9",
    color: "#fff",
    outline: "none",
    fontSize: "14px",
    marginTop: "2%",
    marginRight: "2%",
    marginBottom: "2%",
    marginLeft: "2%",
    transition: "0.5s all",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
};

import React, { useReducer } from "react";
const actions = {
  NAME: "NAME",
  EMAIL: "EMAIL",
  PASS: "PASS",
  RESET: "RESET",
};
const initialState = {
  name: "",
  email: "",
  pass: "",
};

const SignupPage = () => {
  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case actions.EMAIL: {
        return { ...state, email: payload };
      }
      case actions.NAME: {
        return { ...state, name: payload };
      }
      case actions.PASS: {
        return { ...state, pass: payload };
      }
      case actions.RESET: {
        return initialState;
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, email, pass } = state;
  // console.log(name,email,pass)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    fetch(`https://fullbackend-2ndtime-1.onrender.com/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => {
        console.log(res);
        res.json();
        dispatch({ type: actions.RESET });
      })
      .catch((err) => console.log(err.message, "is error message"));
  };
  function handleName(e) {
    console.log(e.target.value);
    dispatch({ type: actions.NAME, payload: e.target.value });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={handleName}
      />
      <input
        type="text"
        placeholder="Enter EMAIL"
        value={email}
        onChange={(e) =>
          dispatch({ type: actions.EMAIL, payload: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Enter password"
        value={pass}
        onChange={(e) =>
          dispatch({ type: actions.PASS, payload: e.target.value })
        }
      />
      <input type="submit" />
    </form>
  );
};

export default SignupPage;

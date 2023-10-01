/** @format */

import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Profile() {
  return (
    <div>
      <img src='https://i.imgur.com/MK3eW3Am.jpg' alt='Katherine Johnson' />{" "}
    </div>
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

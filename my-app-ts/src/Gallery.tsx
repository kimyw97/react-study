/** @format */
import React from "react";
import "./App.css";
import { Profile } from "./Profile";

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

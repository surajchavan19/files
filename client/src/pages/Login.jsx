import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import "@passageidentity/passage-auth";

export const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <passage-auth app-id={"0ZpFbJsBa1IWamTgtAyFEYNP"}></passage-auth>
    </div>
  );
};

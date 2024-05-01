import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export const ProfilePage = () => {

    try {
      axios
        .get('http://localhost:8080/auth/me')
        .then((res) => {
          console.log('profile', res.data);
        })
        .catch((e) => {
          alert('wrong details');
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }

  return (
    <>
      profile Page
    </>
  );

}
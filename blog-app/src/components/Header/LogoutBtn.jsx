import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout, Loading } from "../../store/authSlice.js";
import { useNavigate } from "react-router-dom";
import Loader from "../../pages/Loader.jsx";
import { motion } from "motion/react";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.loading);

  const logoutHandler = () => {
    dispatch(Loading(true));
    authService
      .logout()
      .then(() => {
        dispatch(logout());

        navigate("/login");
        dispatch(Loading(false));
      })
      .catch((err) => {
        console.log("Login Failed :", err);
      });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block text-white px-6 py-2 duration-200 hover:bg-blue-600 rounded-full"
          onClick={logoutHandler}
        >
          Logout
        </motion.button>
      )}
    </>
  );
};

export default LogoutBtn;

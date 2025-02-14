import React, { useState } from "react";
import Container from "../container/Container";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  // Framer Motion Variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15, // Stagger effect for smoother animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="py-3 shadow bg-gray-500 text-white">
      <Container>
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-between"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </motion.div>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Desktop Navigation with Stagger Effect */}
          <motion.ul
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex ml-auto items-center space-x-6"
          >
            {navItems.map(
              (item) =>
                item.active && (
                  <motion.li key={item.name} variants={itemVariants}>
                    <motion.button
                      onClick={() => navigate(item.slug)}
                      className="px-6 py-2 duration-200 rounded-full hover:bg-blue-600"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.name}
                    </motion.button>
                  </motion.li>
                )
            )}

            {authStatus && (
              <motion.li variants={itemVariants}>
                <LogoutBtn />
              </motion.li>
            )}
          </motion.ul>
        </motion.nav>

        {/* Mobile Menu with Stagger Effect */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-16 right-2 rounded-lg w-fit z-10 bg-gray-500 shadow-md"
            >
              <motion.ul
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center space-y-4 py-4"
              >
                {navItems.map(
                  (item) =>
                    item.active && (
                      <motion.li key={item.name} variants={itemVariants}>
                        <button
                          onClick={() => {
                            navigate(item.slug);
                            setMenuOpen(false);
                          }}
                          className="block w-full px-6 py-3 hover:bg-blue-500 rounded-full"
                        >
                          {item.name}
                        </button>
                      </motion.li>
                    )
                )}
                {authStatus && (
                  <motion.li variants={itemVariants}>
                    <LogoutBtn />
                  </motion.li>
                )}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

export default Header;

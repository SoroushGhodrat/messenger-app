import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.page";
import Chat from "./pages/Chat/Chat.page";
import Header from "./components/common/Header/Header";
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={styles["App"]}>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

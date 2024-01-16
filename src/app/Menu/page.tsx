"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import { FaPlay, FaPause, FaVolumeUp, FaHeadphones } from "react-icons/fa";

const customModalStyles = {
  content: {
    position: "absolute",
    top: "calc(100% + -420px)",
    left: "83%",
    transform: "translate(-50%, -50%)",
    maxWidth: "240px",
    width: "100%",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "none",
    overflow: "hidden",
    height: "215px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCadastroModal, setShowCadastroModal] = useState(false);

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: any) => {
    setVolume(e.target.value);
  };

  const handleEntrarClick = () => {
    setShowLoginModal(true);
  };

  const handleCadastrarClick = () => {
    setShowCadastroModal(true);
  };

  const closeModal = () => {
    setShowLoginModal(false);
    setShowCadastroModal(false);
  };

  const handleLogin = () => {
    console.log("Login realizado!");
    closeModal();
  };

  const handleCadastro = () => {
    console.log("Cadastro realizado!");
    closeModal();
  };

  const photoURL =
    "https://www.habbo.com.br/habbo-imaging/avatarimage?user=AutoNight&action=std&direction=2&head_direction=3&gesture=sml&size=l";

  return (
    <header className="h-[93px] bg-purple-500 text-white p-4 flex justify-between items-center shadow-md relative">
      <div className="flex items-center space-x-4 ml-[82px]">
        <div className="relative w-12 h-12 overflow-hidden rounded-full">
          <img
            src={photoURL}
            alt="Profile"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-white opacity-40"></div>
        </div>
        <div className="ml-2 text-white">
          <p className="text-sm flex items-center mb-1">
            <span className="ml-1">IronRadioStars</span>
          </p>
          <div className="flex items-center">
            <p className="text-sm">Programação: Marcos Na Iron</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4 mr-[234px]">
        <button
          className="bg-white text-purple-500 rounded-full p-2 focus:outline-none transition-transform transform hover:scale-105"
          onClick={handlePlayPauseClick}
        >
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <FaVolumeUp size={20} className="text-white mr-2" />
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-[7rem] h-4 bg-white appearance-none rounded-full overflow-hidden focus:outline-none focus:shadow-outline-purple"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2 text-white">
          <FaHeadphones size={20} className="text-white" />
          <p className="text-sm">111 Ouvintes</p>
        </div>
      </div>
      <div className="buttons-login mr-[180px] flex items-center space-x-4">
        <button
          className="bg-white cursor-pointer text-purple-500 rounded-full px-4 py-2 focus:outline-none transition-transform transform hover:scale-105"
          onClick={handleEntrarClick}
        >
          Entrar
        </button>
        <Modal
          isOpen={showLoginModal}
          onRequestClose={closeModal}
          contentLabel="Login Modal"
          style={customModalStyles}
        >
          <div className="modal-form flex flex-col space-y-4">
            <input
              type="text" placeholder="Usuário"
              className="border rounded p-2 focus:outline-none focus:ring focus:border-white transition duration-300 hover:shadow-md"
              style={{ width: "100%" }}
            />
            <input
              type="password" placeholder="Senha"
              className="border rounded p-2 mt-[-7px] focus:outline-none focus:ring focus:border-white transition duration-300 hover:shadow-md"
              style={{ width: "100%" }}
            />
            <div className="flex space-x-2">
              <button
                type="button"
                className="bg-purple-500 text-white p-2 rounded cursor-pointer w-full mt-2 transition duration-300 hover:scale-105"
                onClick={handleLogin}
              >
                Entrar
              </button>
              <button
                type="button"
                className="bg-purple-500 text-white p-2 rounded cursor-pointer w-full mt-2 transition duration-300 hover:scale-105"
                onClick={() => {
                  closeModal();
                  setShowCadastroModal(true);
                }}
              >
                Cadastrar
              </button>
            </div>
            <p
              className="text-sm text-white cursor-pointer mt-2"
              onClick={() => {
                console.log("Esqueceu a senha?");
              }}
            >
              Esqueceu a senha?
            </p>
          </div>
        </Modal>

        <Modal
          isOpen={showCadastroModal}
          onRequestClose={closeModal}
          contentLabel="Cadastro Modal"
          style={customModalStyles}
        >
          <div className="modal-form flex flex-col space-y-4">
            <input
              type="text" placeholder="Usuário"
              className="border rounded p-2 focus:outline-none focus:ring focus:border-white transition duration-300 hover:shadow-md"
              style={{ width: "100%" }}
            />
            <input
              type="password" placeholder="Senha"
              className="border rounded p-2 focus:outline-none focus:ring focus:border-white transition duration-300 hover:shadow-md"
              style={{ width: "100%" }}
            />
            <button
              type="button"
              className="bg-purple-500 text-white p-2 rounded-full cursor-pointer w-full transition duration-300 hover:scale-105"
              onClick={handleCadastro}
            >
              Cadastrar
            </button>
          </div>
        </Modal>
      </div>
    </header>
  );
};

export default Header;

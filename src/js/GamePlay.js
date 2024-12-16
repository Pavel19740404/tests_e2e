import goblin from "../img/goblin.png";

export default class GamePlay {
  constructor() {
    this.gameEls = {
      hits: null,
      skip: null,
      gameBoard: null,
      startBtn: null,
      gameMessage: null,
      goblin: null,
    };
    this.startBtnListeners = [];
    this.gameBoardListeners = [];
    this.boardSize = 4;
    this.cells = [];
  }

  init() {
    this.gameEls.startBtn = document.querySelector(".start");
    this.gameEls.startBtn.addEventListener(
      "click",
      this.onStartBtnClick.bind(this),
    );

    this.gameEls.hits = document.querySelector(".hits");
    this.gameEls.skip = document.querySelector(".skip");

    this.gameEls.gameBoard = document.querySelector(".game-board");
    this.gameEls.gameBoard.addEventListener(
      "click",
      this.onGameBoardClick.bind(this),
    );

    this.gameEls.gameMessage = document.querySelector(".game-message");
    this.createGoblin();
    this.drawBoard();
  }
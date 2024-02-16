"use strict";
import Person from "./classes/person.js";

const $inputModal = $(".input-modal");
const $inputModalCloseBtn = $(".input-modal .cancel-btn");
const $newGameButton = $(".start-game-btn");
const $confirmCharacterBtn = $("#confirm-character-btn");
const $checkCharacterStatsBtn = $("#check-character-stats-btn");
let characterCreated = false;
let player;

/**
 * Initiate game and create a character
 */
const initGame = () => {
  player = new Person(
    $("#character-name").val(),
    parseInt($("#character-age").val()),
    $("#character-profession").val(),
    parseFloat($("#character-money").val()),
  );
  sessionStorage.setItem("character", JSON.stringify(player));
};

const showCharacterStats = (character) => {
  if (typeof character === "undefined") {
    return;
  }
  console.log(
    `Your name is ${character.name} and you are ${character.age} year${character.age === 1 ? "" : "s"} old. You are currently bringing in the bread by being a ${character.profession}. You have ${character.money}$ in your pouch`,
  );
};

const validateCharacterInfo = () => {
  const $nameInput = $("#character-name");
  const $ageInput = $("#character-age");
  const $professionInput = $("#character-profession");
  const $moneyInput = $("#character-money");
  if ($nameInput.val() === "" || $professionInput.val() === "") {
    return false;
  }

  if (!parseInt($ageInput.val()) || !parseFloat($moneyInput.val())) {
    return false;
  }
  return true;
};

$newGameButton.on("click", () => {
  if (!$inputModal.hasClass("active")) {
    $inputModal.addClass("active");
  }
});

$confirmCharacterBtn.on("click", () => {
  if (validateCharacterInfo() && !characterCreated) {
    initGame();
    characterCreated = true;
  }
});

$inputModalCloseBtn.on("click", () => {
  $inputModal.removeClass("active");
});

$checkCharacterStatsBtn.on("click", () => {
  if (typeof player === "undefined") {
    player = JSON.parse(sessionStorage.getItem("character"));
  }

  if (typeof player === "undefined" || player == null) {
    console.log("No player found");
    return;
  }
  showCharacterStats(player);
});

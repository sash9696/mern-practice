// multiplayer shooting game

// players and health

// two players each starting with 100% health displayed in a progress bar

// each player will have a shoot button

// click on shoot it should do a random damage  betwen 1-5 to the opponent's health

// 20% chance to dodge an attack (no damage)

// the first player whose health reaches 0 or less loses

// players can see  real time health updates and alerts (damage, dodge)

// disable the shoot buttons after the game is over

// restart button resets the game

document.addEventListener("DOMContentLoaded", (event) => {
  // console.log("DOM fully loaded and parsed");

  // variables
  let health1 = getElement("health1");
  let health2 = getElement("health2");

  let health1Text = getElement("health1Text");
  let health2Text = getElement("health2Text");

  let shoot1 = getElement("shoot1");
  let shoot2 = getElement("shoot2");

  let result = getElement("result");
  let restart = getElement("restart");

  //functions
  function getElement(id) {
    return document.getElementById(id);
  }

  function getRandomDamage() {
    return Math.floor(Math.random() * 20) + 1;
  }

  function canDodge() {
    return Math.random() < 0.2;
  }

  function checkWinner() {
    if (health1.value <= 0) {
      alert("Player 2 wins!");
      result.textContent = "Player 2 wins!";
    } else if (health2.value <= 0) {
      alert("Player 1 wins!");
      result.textContent = "Player 1 wins!";
    }

    if (health1.value <= 0 || health2.value <= 0) {
      shoot1.disabled = true;
      shoot1.style.background = "gray";

      shoot2.disabled = true;
      shoot2.style.background = "gray";

      restart.style.display = "block";
    }
  }

  function updateHealth(player, playerText, damage, attacker, defender) {
    if (canDodge()) {
      alert(`${defender} dodged the attack`);
    } else {
      player.value = Math.max(player.value - damage, 0);
      playerText.textContent = `${player.value}%`;
      alert(`${attacker} shot and dealt ${damage} damage.`);
    }
  }

  //events

  shoot1.addEventListener("click", function () {
    //disable the button
    shoot2.disabled = false;
    shoot2.style.background = "";
    shoot1.disabled = true;
    shoot1.style.background = "gray";
    // get the damage value
    let damage = getRandomDamage();
    //update the health

    updateHealth(health2, health2Text, damage, "Player1", "Player2");

    //check winner

    checkWinner();
  });

  shoot2.addEventListener("click", function () {
    shoot1.disabled = false;
    shoot1.style.background = "";
    shoot2.disabled = true;
    shoot2.style.background = "gray";
    // get the damage value
    let damage = getRandomDamage();
    //update the health

    updateHealth(health1, health1Text, damage, "Player2", "Player1");

    //check winner

    checkWinner();
  });

  restart.addEventListener("click", function () {
    health1.value = 100;
    health2.value = 100;

    health1Text.textContent = "100%";
    health2Text.textContent = "100%";

    result.textContent = "";

    restart.style.display = "none";

    alert("Game Restarted");

    shoot1.disabled = false;
    shoot1.style.background = "";

    shoot2.disabled = false;
    shoot2.style.background = "";
  });
});

"use strict";
/**
 * Class representing a person
 */
class Person {
  /**
   * Create a person
   * @param {string} name
   * @param {number} age
   * @param {string} profession
   * @param {number} money
   */
  constructor(name, age, profession, money) {
    this.name = name;
    this.age = parseInt(age);
    this.profession = profession;
    this.money = parseFloat(money);
  }

  changeMoney(changeMultiplier = 1, changeAmount = 0) {
    if (changeMultiplier !== 1) {
      this.money *= changeMultiplier;
    }
    if (changeAmount !== 0) {
      this.money += changeAmount;
    }
  }
}

export default Person;

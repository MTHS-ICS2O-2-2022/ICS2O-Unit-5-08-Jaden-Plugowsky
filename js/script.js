// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function calculatePressed() {
  // This function takes two user-given positive numbers and this divides them together using long division, loops, and if statements
  // Input through textfields
  const firstNumber = parseFloat(document.getElementById("first-number").value)
  const secondNumber = parseFloat(
    document.getElementById("second-number").value
  )
  let remainder = 0
  let counter = 0
  const moduloFirstNumber = firstNumber % 1 // used for calculating whether or not the number is a decimal
  const moduloSecondNumber = secondNumber % 1

  // Process
  remainder = firstNumber
  while (remainder >= secondNumber) {
    // This works essentially as long division: subtracting the numerator by the denominator until you cannot anymore, and taking the amount of times you subtracted, along with the remainder.
    remainder -= secondNumber
    counter += 1
    // This counter is how many times the numerator goes into the denominator, and is essentially the answer.
    // If counter ends up as 0, it can usually be assumed that the number is a decimal. Of course, remainder left behind also designates this.
  }

  // Output
  if (
    firstNumber >= 0 &&
    secondNumber >= 0 &&
    moduloFirstNumber == 0 &&
    moduloSecondNumber == 0
  ) {
    // This if statement only prints the answer if the numbers inputted are positive (above or equal to 0) and whole (modulo 1 of the numbers is equal to 0)
    document.getElementById("answer").innerHTML =
      firstNumber + " / " + secondNumber + " = " + counter + " R " + remainder
  } else {
    document.getElementById("answer").innerHTML =
      "Your inputs were either negative, decimals, or both. Please enter a positive, whole number."
  }
}

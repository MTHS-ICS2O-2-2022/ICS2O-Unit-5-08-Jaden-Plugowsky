// Created by: Jaden Plugowsky
// Created on: May 2023
//
// This program takes two user-given positive numbers and this divides them together using long division, loops, and if statements

package main

import (
	"fmt"
	"math"
)

var firstNumber float64
var secondNumber float64
var remainder = 0.0
var counter = 0.0
var moduloFirstNumber float64
var moduloSecondNumber float64

func main() {
	// This function takes two user-given positive numbers and this divides them together using long division, loops, and if statements
	// Input
	fmt.Println("This function takes two user-given positive numbers and this divides them together using long division, loops, and if statements.")
	fmt.Println("The first number you enter in is divided by the second.")
	fmt.Println("\nEnter the first number (numerator): ")
	fmt.Scanln(&firstNumber)
	fmt.Println("\nEnter the second number (denominator): ")
	fmt.Scanln(&secondNumber)

	// Process
	moduloFirstNumber = math.Mod(firstNumber, 1)
	moduloSecondNumber = math.Mod(secondNumber, 1)
	remainder = firstNumber
	for remainder >= secondNumber {
		remainder -= secondNumber
		counter++
	}

	// Output
	if firstNumber >= 0 && secondNumber >= 0 && moduloFirstNumber == 0 && moduloSecondNumber == 0 {
		fmt.Println("\nAnswer:", firstNumber, "/", secondNumber, "=", counter, "R", remainder)
	} else {
		fmt.Println("\nYour inputs were either negative, decimals, or both. Please enter a positive, whole number.")
		fmt.Println("Please reinput the command and try again.")
	}

	fmt.Println("\nDone.")
}

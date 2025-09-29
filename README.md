# String Calculator TDD Kata

This is my solution for the **Incubyte String Calculator TDD Assessment**.

---

## Description

A simple string calculator implemented following **Test-Driven Development (TDD)** principles.  
The calculator supports:

- Adding any amount of numbers.
- Handling empty strings.
- Handling new lines between numbers.
- Custom delimiters.
- Throwing exceptions for negative numbers (shows all negative numbers in the message).

This project was implemented step by step, following TDD, to demonstrate clean, testable, and maintainable code.

---

## Features

- `add("")` → `0`  
- `add("1")` → `1`  
- `add("1,5")` → `6`  
- Supports multiple numbers, e.g., `"1,2,3,4"` → `10`  
- Supports new line as a separator, e.g., `"1\n2,3"` → `6`  
- Custom delimiters, e.g., `"//;\n1;2"` → `3`  
- Negative numbers throw an exception: `"Negative numbers not allowed: -2, -5"`

---

## Technologies Used

- Programming Language: **[Your language, e.g. JavaScript ]**  
- Testing Framework: **[Your framework, e.g., JUnit  Jest  unittest]**  
- Git & GitHub for version control

---

## How to Run Tests

1. Clone the repository:
```bash
git clone https://github.com/prachigaikwad27/string-calculator-tdd.git

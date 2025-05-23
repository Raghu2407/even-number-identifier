# 🧮 Even or Odd Checker

![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow)

This is a simple and beginner-friendly JavaScript program that checks if a number is **even** or **odd**. It also prints the **remainder** when divided by 2, making it a great intro project for learning the modulo operator (`%`).

---

## 🛠 How It Works

1. Define a number `n` you want to check.
2. Calculate `n % 2` to get the remainder.
3. Display the remainder in the console.
4. Use an array `["Even", "Odd"]` to map the remainder to the final result:
   - `0 → Even`
   - `1 → Odd`

---

## 🧾 Example Code

```javascript
var n = 10;
var result = ["Even", "Odd"];

console.log("Remainder when " + n + " is divided by 2 is: " + (n % 2));
console.log("Result:", result[n % 2]); // Output: "Even"

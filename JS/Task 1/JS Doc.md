## 1. Introduction to JavaScript

### Why JavaScript?
JavaScript is a language that used to manipulate web pages dynamically.
*   **Change HTML Content:** Modify text and structure.
*   **Change HTML Styles (CSS):** Alter the appearance of elements dynamically.
*   **Visibility:** Hide and show HTML elements.

### Where to Write JavaScript
*   **Inside HTML:** Code is inserted between `<script>` and `</script>` tags.
*   **Location:** Can be placed in the `<head>` or the `<body>` of the document.
*   **External Files:** JavaScript can be written in separate files (usually `.js`) and linked to the HTML.
*   **Environments:** Code can be executed in the Window, Browser, or Console.

---

## 2. Variables & Identifiers

### What is a Variable?
A variable is a container that stores data in memory so it can be used later.

### Variable Keywords Comparison
JavaScript provides three keywords to declare variables. The differences lie in update capability, redeclaration capability, and scope.

| Feature | `var` | `let` | `const` |
| :--- | :---: | :---: | :---: |
| **Can be updated?** | ✅ Yes | ✅ Yes | ❌ No |
| **Can be redeclared?** | ✅ Yes | ❌ No | ❌ No |
| **Scope** | Function Scope | Block Scope | Block Scope |

> **Note:**
> *   `var` respects **Function** scope.
> *   `let` and `const` respect **Block** scope.

### Identifiers
An identifier is the name given to a variable, function, class, etc.

**Rules for Identifiers:**
1.  Must start with a **letter**, underscore (`_`), or dollar sign (`$`).
2.  **Cannot** start with a number.
3.  **Cannot** contain spaces.
4.  **Cannot** use reserved keywords (e.g., `if`, `class`, `return`).
5.  Identifiers are **Case Sensitive** (e.g., `name` is not equal to `Name`).

---

## 3. JavaScript Data Types

Data types in JavaScript are categorized into two main groups based on mutability and how they are stored/copied.

### 1. Primitive Types
*   **Characteristics:** Immutable (cannot be changed), copied by **value**.
*   **Behavior:** When you assign a primitive value to a new variable, it creates a new copy.
*   **Examples:**
    *   String
    *   Number
    *   Boolean
    *   Null
    *   Undefined

### 2. Non-Primitive Types
*   **Characteristics:** Mutable (can be changed), copied by **reference**.
*   **Behavior:** Changing the data affects all references pointing to that object.
*   **Examples:**
    *   Object
    *   Array
    *   Function

---

## 4. Operators

### Arithmetic Operators
Used for mathematical calculations:
*   `+` (Addition)
*   `-` (Subtraction)
*   `*` (Multiplication)
*   `/` (Division)
*   `**` (Exponentiation)
*   `%` (Modulus/Remainder)

### Assignment Operators
Used to assign values to variables:
*   `*=`
*   `/=`
*   `-=`
*   `+=`

### Increment / Decrement
*   `++` (Increase by 1)
*   `--` (Decrease by 1)

### Comparison Operators
Used to compare two values:
*   `==` (Equal to - checks the value only)
*   `===` (Strict equal to - checks value and type)
*   `!==` (Not equal to)
*   `>` (Greater than)
*   `<` (Less than)
*   `>=` (Greater than or equal to)
*   `<=` (Less than or equal to)

### Logical Operators
Used for logic gates:
*   `&&` (AND)
*   `||` (OR)
*   `!` (NOT)

---

## 5. JavaScript Numbers

### Operational Behavior
*   **String Conversion:** JavaScript will try to convert strings to numbers in all numeric operations (subtraction, division, multiplication) **except for addition (+)**.
*   **Concatenation:** If one of the operands in a `+` operation is a string, JavaScript performs **string concatenation** instead of arithmetic addition.

### NaN (Not a Number)
*   Represents a result of invalid math.
*   **Equality:** `NaN` does not equal itself because it represents an "invalid number" or unknown value.

### Number Methods
Common built-in methods for handling numbers:

*   **`toString()`**: Converts a number to a string.
*   **`toFixed(x)`**: Formats a number with a fixed number (`x`) of decimal places.
*   **`isNaN(x)`**: Checks if the value `x` is the special value `NaN`.
*   **`parseInt(x)`**: Converts a string to an integer (stops parsing at the first non-digit character).
*   **`parseFloat(x)`**: Converts a string to a floating-point number (preserves decimals).
*   **`isInteger(x)`**: Checks if the value is an integer.
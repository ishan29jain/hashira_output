# Polynomial Constant Solver

### Problem Statement

This project solves for the constant term **c** of a polynomial given a set of its roots. The problem is to read a JSON file containing `n` roots, each with a specific base, and calculate **c** using the first `k` roots.

The polynomial is defined by its factored form: $F(x) = a(x - r_1)(x - r_2)...(x - r_k)$. The constant term **c** is $F(0)$, which simplifies to $c = a(-1)^k \prod_{i=1}^k r_i$. Assuming the leading coefficient **a** is 1, the value of **c** is the product of the first **k** roots, with a sign determined by whether **k** is odd or even.

---

### Solution

The solution is implemented in **Java**. It uses the `json-simple` library to parse the input JSON file. The key steps are:

1.  **Read and Parse JSON**: The program reads the JSON file to get the values for `n`, `k`, and the root data.
2.  **Base Conversion**: For each of the first `k` roots, the value string (e.g., "111" in base "2") is converted to a decimal number.
3.  **BigInteger Arithmetic**: The `java.math.BigInteger` class is used to handle these conversions and all subsequent calculations. This prevents overflow issues with the extremely large numbers in the second test case.
4.  **Calculate Product**: The converted decimal values of the `k` roots are multiplied together.
5.  **Determine Final Value**: The final value of **c** is obtained by negating the product if `k` is odd.

---

### How to Run

1.  **Dependencies**: Ensure the `json-simple` library is in your Java project's classpath.
2.  **Project Structure**: Place the source code (`PolynomialSolver.java`) and the test case JSON file (e.g., `testcase2.json`) in the same directory.
3.  **Execution**: Compile and run the `PolynomialSolver.java` file.

**Example Command-Line Execution:**

```bash
# Compile with the json-simple JAR
javac -cp "path/to/json-simple-1.1.1.jar:." PolynomialSolver.java

# Run the program
java -cp "path/to/json-simple-1.1.1.jar:." PolynomialSolver

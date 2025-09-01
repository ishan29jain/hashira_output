Polynomial Constant Solver
This project solves for the constant term c of a polynomial given a set of its roots. The problem is based on the provided handwritten problem statement and a set of JSON test cases.
Problem Description
The core task is to calculate the constant c of a polynomial F(x) where the number of roots, k, is given. The roots themselves are provided in a JSON file, with each root defined by its value and base (e.g., base-2, base-16).
The polynomial can be represented in its factored form as:
F(x) = a(x - r\_1)(x - r\_2)...(x - r\_k)
Where r\_1, r\_2, ..., r\_k are the roots and a is the leading coefficient.
The constant term c is the value of the polynomial when x=0.
By substituting x=0 into the factored form, we get:
c = F(0) = a(-r\_1)(-r\_2)...(-r\_k) = a \\cdot (-1)^k \\cdot (r\_1)(r\_2)...(r\_k)
Assuming the leading coefficient a is 1 (as no y-values are provided to determine it), the value of c is determined by the product of the first k roots and the sign determined by k.
Solution Approach
 * Read Input: The program reads the problem data from a JSON file.
 * Parse JSON: It parses the JSON to extract the value of k and the roots.
 * Base Conversion: For each of the first k roots, the program converts the value string from its given base to a decimal representation. A big integer library is used to handle the large numbers in the second test case without overflow.
 * Calculate Product: The decimal values of the k roots are multiplied together.
 * Determine Sign: The final product is multiplied by (-1)^k to get the correct sign for c. If k is an odd number, the product is negated.
 * Output: The final value of c is printed to the console.
Development Environment
 * Language: Java
 * IDE/Environment: A local IDE (IntelliJ, Eclipse) or an online IDE like Repl.it was used.
 * Libraries: The json-simple library was used for JSON parsing. java.math.BigInteger was used to handle large integer arithmetic.
How to Run the Code
 * Dependencies: Ensure you have the json-simple JAR file in your project's classpath.
 * Code: The source code is available in this repository.
 * JSON File: Place the test case JSON file (e.g., testcase2.json) in the same directory as the executable.
 * Execution: Compile and run the PolynomialSolver.java file. The program will automatically read the JSON file, perform the calculations, and print the output.
Example Command (assuming you use a terminal):
javac -cp ".:path/to/json-simple-1.1.1.jar" PolynomialSolver.java
java -cp ".:path/to/json-simple-1.1.1.jar" PolynomialSolver

Output
The program will output a single number representing the calculated value of the constant c.

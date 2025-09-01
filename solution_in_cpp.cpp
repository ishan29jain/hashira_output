#include <iostream>
#include <vector>
#include <string>
#include <cctype>
#include <iomanip>

long long strToInt(const std::string& value, int base) {
    long long result = 0;
    for (char c : value) {
        int digit = 0;
        if (isdigit(c))
            digit = c - '0';
        else if (isalpha(c))
            digit = tolower(c) - 'a' + 10;
        result = result * base + digit;
    }
    return result;
}

std::vector<long double> polyMul(const std::vector<long double>& a, const std::vector<long double>& b) {
    std::vector<long double> res(a.size() + b.size() - 1, 0.0);
    for (int i = 0; i < (int)a.size(); ++i)
        for (int j = 0; j < (int)b.size(); ++j)
            res[i + j] += a[i] * b[j];
    return res;
}

void polyAdd(std::vector<long double>& a, const std::vector<long double>& b) {
    if (b.size() > a.size()) a.resize(b.size(), 0.0);
    for (size_t i = 0; i < b.size(); ++i) a[i] += b[i];
}

std::vector<long double> lagrangeCoeffs(const std::vector<long long>& x, const std::vector<long long>& y) {
    int k = x.size();
    std::vector<long double> coeffs(k, 0.0);
    for (int i = 0; i < k; ++i) {
        std::vector<long double> basis = {1.0};
        long double denom = 1.0;
        for (int j = 0; j < k; ++j) {
            if (j == i) continue;
            std::vector<long double> factor = {-(long double)x[j], 1.0L};
            basis = polyMul(basis, factor);
            denom *= (x[i] - x[j]);
        }
        for (long double& c : basis) c *= (y[i] / denom);
        polyAdd(coeffs, basis);
    }
    return coeffs;
}

int main() {
    std::vector<std::string> bases = {
        "6", "15", "15", "16", "8", "3", "3", "6", "12", "7"
    };
    std::vector<std::string> values = {
        "13444211440455345511",
        "aed7015a346d635",
        "6aeeb69631c227c",
        "e1b5e05623d881f",
        "316034514573652620673",
        "2122212201122002221120200210011020220200",
        "20120221122211000100210021102001201112121",
        "20220554335330240002224253",
        "45153788322a1255483",
        "1101613130313526312514143"
    };

    int k = 7;
    std::vector<long long> x, y;
    for (int i = 0; i < k; ++i) {
        x.push_back(i + 1);
        y.push_back(strToInt(values[i], stoi(bases[i])));
    }

    std::vector<long double> coeffs = lagrangeCoeffs(x, y);

    std::cout << std::fixed << std::setprecision(0);
    for (auto c : coeffs) std::cout << c << " ";
    std::cout << std::endl;
    return 0;
}

// Weekly Employee Income Withholding Calculator
// Originally by GitHub#Liath
// Based on IRS Circular E - http://www.irs.gov/pub/irs-pdf/p15.pdf
// Per the "Percentage Method"

const wages = {
    single: {
      // Single
      0: { percentage: 0, base: 0 },
      44: { percentage: 0.1, base: 0 },
      222: { percentage: 0.15, base: 17.8 },
      764: { percentage: 0.25, base: 99.1 },
      1789: { percentage: 0.28, base: 355.35 },
      3685: { percentage: 0.33, base: 886.23 },
      7958: { percentage: 0.35, base: 2296.32 },
      7990: { percentage: 0.396, base: 2307.52 }
    },
    married: {
      // Married
      0: { percentage: 0, base: 0 },
      165: { percentage: 0.1, base: 0 },
      520: { percentage: 0.15, base: 35.5 },
      1606: { percentage: 0.25, base: 198.4 },
      3073: { percentage: 0.28, base: 565.15 },
      4597: { percentage: 0.33, base: 991.87 },
      8079: { percentage: 0.35, base: 2140.93 },
      9105: { percentage: 0.396, base: 2500.03 }
    }
  },
  baseAllowance = 76.9, // 1 Allowance
  // Returns Federal Income Tax amount (Married, Allowances, Gross Income)
  calulateTax = function(married, allowanceIncrement, grossIncome) {
    grossIncome -= baseAllowance * allowanceIncrement; // Pay after allowances
    const brackets = Object.keys(wages[married == true ? "married" : "single"]); //Married?
    for (var i = 0; i < brackets.length; i++) {
      // Find bracket
      if (brackets[i] > grossIncome) {
        grossIncome -= brackets[i - 1]; // Get taxable income
        const bracket =
          wages[married == true ? "married" : "single"][brackets[i - 1]]; // Set bracket
        return bracket.percentage * grossIncome + bracket.base; // Taxable income * Tax Rate + Base Tax, per IRS Circular E table 5
      }
    }
  };

export { calulateTax };

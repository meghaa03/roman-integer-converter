# About the package

The package let's you convert a roman number into its corresponding numeric value and vice-versa.

# Installation

`npm i roman-integer-converter --save`

# Usage

```
import intToRoman from './utils/integerToRoman';
import romanToInt from './utils/romanToInteger';

romanToInt.getNumeralValue("romanstring");  
//example romanToInt.getNumeralValue("xiv"); -> gives output 14 (number)

intToRoman.getRomanValue(numericValue);
//example intToRoman.getRomanValue(16); -> gives output XVI (string)
```
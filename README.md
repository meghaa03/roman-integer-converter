# About the package

The package let's you convert a roman number into its corresponding numeric value and vice-versa.

# Installation

`npm i roman-integer-converter --save`

# Usage

```
import { getRomanValue, getNumeralValue } from 'roman-integer-converter';

getNumeralValue("romanstring");  
//example getNumeralValue("xiv"); -> gives output 14 (number)

getRomanValue(numericValue);
//example getRomanValue(16); -> gives output XVI (string)
```
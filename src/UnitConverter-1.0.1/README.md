# Unit Converter Module
1dv610 Laboration 2

Version 1.0.0

License MIT

## Table of Contents

- [Introduction](#introduction)
- [Available conversions](#available-conversions)
  - [Temperature](#temperature)
  - [Length](#length)
  - [Speed](#speed)
  - [Weight](#weight)
  - [Volume](#volume)
- [Installation](#installation)
- [How to use](#how-to-use)
  - [Available methods](#available-methods)
  - [Parameters](#parameters)
- [Restrictions](#restrictions)
- [Errors](#errors)
- [Contribution](#contribution)
  - [Contributing](#contributing)
  - [Bug Reports](#bug-reports)

## Introduction
This module allows you to convert various units of measurement, including temperature, length, speed, weight, and volume, between metric units (commonly used in Europe) and imperial units (commonly used in the US). The module can also convert multiple values of the same conversion, provide a conversion summary and round up the value.

The module can be integrated into for example recipe, fitness and health, weather, and travel applications.

The module is currently only available in english.

## Available conversions

### Temperature

| From | To |
|------|----|
| Celsius (C) | Fahrenheit (F) |
| Fahrenheit (F) | Celsius (C) |

### Length

| From | To |
|------|----|
| Meters (M) | Feet (Ft) |
| Feet (Ft) | Meters (M) |
| Centimeters (Cm) | Inches (In) |
| Inches (In) | Centimeters (Cm) |

### Speed

| From | To |
|------|----|
| Miles per hour (Mph) | Kilometers per hour (Km/h) |
| Kilometers per hour ( Km/h) | Miles per hour (Mph) |
| Feet per second (Fps) | Meters per second (M/s) |
| Meters per second (M/s) | Feet per second (Fps) |

### Weight

| From | To |
|------|----|
| Kilograms (Kg) | Pounds (Lb) |
| Pounds (Lb) | Kilograms (Kg) |
| Grams (G) | Ounces (Oz) |
| Ounces (Oz) | Grams (G) |

### Volume

| From | To |
|------|----|
| Liters (L) | Gallons (Gal) |
| Gallons (Gal) | Liters (L) |
| Liters (L) | Pints (Pt) |
| Pints (Pt) | Liters (L) |
| Deciliters (Dl) | Cups (c) |
| Cups (c) | Deciliters (Dl) |

## Installation

You can download the latest release from the [GitHub Releases page](https://github.com/h-mp/L2/releases).

1. Go to the [Releases page](https://github.com/h-mp/L2/releases).
2. Download the source code (`.zip` or `.tar.gz`) of the latest release.
3. Extract the downloaded file.
4. Navigate to the extracted directory.
5. Install dependencies:
   ```sh
   npm install
   ```

Note: Currently the release also includes the test cases.

## How to use

The `UnitConverter` class provides methods to convert various units of measurement between metric and imperial systems.

### Available methods

All available methods (more specific descriptions further down):
- **convertTemperature**( convertFrom, convertTo, numberToConvert )
- **convertLength**( convertFrom, convertTo, numberToConvert )
- **convertSpeed**( convertFrom, convertTo, numberToConvert )
- **convertWeight**( convertFrom, convertTo, numberToConvert )
- **convertVolume**( convertFrom, convertTo, numberToConvert )
- **convertMultipleValues**( conversionType, convertFrom, convertTo, numbersToConvert )
- **convertWithSummary**( conversionType, convertFrom, convertTo, numberToConvert )
- **convertAndRoundUp**( conversionType, convertFrom, convertTo, numberToConvert, decimalPlaces )

```javascript
const converter = new UnitConverter()

// Examples of use for all available methods:

const convertedTemperature = converter.convertTemperature('celsius', 'fahrenheit', 55) // = 131

const convertedLength = converter.convertLength('m', 'ft', 2) // ≈ 6.56

const convertedSpeed = converter.convertSpeed('mph', 'km/h', 60) // ≈ 96.56

const convertedWeight = converter.convertWeight('kg', 'lb', 24) // ≈ 52.91 

const convertedVolume = converter.convertVolume('deciliters', 'cups', 28) // ≈ 11.83

const convertedValues = converter.convertMultipleValues('length', 'cm', 'in', [7, 12, 35, 42]) // ≈ [2.75, 4.72, 13.77, 16.53]

const convertionSummary = converter.convertWithSummary('weight', 'kg', 'lb', 12) // = { 
    //   conversionType: 'weight',
    //   convertFrom: 'kg',
    //   convertTo: 'lb',
    //   numberToConvert: 12,
    //   convertedNumber: 26.45
    //  }

const convertedNumberRoundedUp = converter.convertAndRoundUp('volume', 'l', 'gal', 12, 3) // = 3.170
```

More specific description for each method:

- **convertTemperature**( convertFrom, convertTo, numberToConvert )
  - **Parameters:**
    - `convertFrom` (String): The unit to convert from (e.g., 'C', 'F').
    - `convertTo` (String): The unit to convert to (e.g., 'F', 'C').
    - `numberToConvert` (Number): The number to convert.
  - **Returns:** (Number) The converted temperature.

- **convertLength**( convertFrom, convertTo, numberToConvert )
  - **Parameters:**
    - `convertFrom` (String): The unit to convert from (e.g., 'ft', 'cm').
    - `convertTo` (String): The unit to convert to (e.g., 'm', 'in').
    - `numberToConvert` (Number): The number to convert.
  - **Returns:** (Number) The converted length.

- **convertSpeed**( convertFrom, convertTo, numberToConvert )
  - **Parameters:**
    - `convertFrom` (String): The unit to convert from (e.g., 'mph', 'm/s').
    - `convertTo` (String): The unit to convert to (e.g., 'km/h', 'fps').
    - `numberToConvert` (Number): The number to convert.
  - **Returns:** (Number) The converted speed.

- **convertWeight**( convertFrom, convertTo, numberToConvert )
  - **Parameters:**
    - `convertFrom` (String): The unit to convert from (e.g., 'kg', 'oz').
    - `convertTo` (String): The unit to convert to (e.g., 'lb', 'g').
    - `numberToConvert` (Number): The number to convert.
  - **Returns:** (Number) The converted weight.

- **convertVolume**( convertFrom, convertTo, numberToConvert )
  - **Parameters:**
    - `convertFrom` (String): The unit to convert from (e.g., 'l', 'dl').
    - `convertTo` (String): The unit to convert to (e.g., 'gal', 'c').
    - `numberToConvert` (Number): The number to convert.
  - **Returns:** (Number) The converted volume.

- **convertMultipleValues**( conversionType, convertFrom, convertTo, numbersToConvert )
  - **Parameters:**
      - `conversionType` (String): The type of conversion (e.g., 'temperature', 'length').
      - `convertFrom` (String): The unit to convert from (e.g., 'C', 'm').
      - `convertTo` (String): The unit to convert to (e.g., 'F', 'ft').
      - `numbersToConvert` (Array): The array of numbers to convert.
  - **Returns:** (Array) The array of converted numbers.

- **convertWithSummary**( conversionType, convertFrom, convertTo, numberToConvert )
  - **Parameters:**
    - `conversionType` (String): The type of conversion (e.g., 'temperature', 'length').
    - `convertFrom` (String): The unit to convert from (e.g., 'l', 'dl').
    - `convertTo` (String): The unit to convert to (e.g., 'gal', 'c').
    - `numberToConvert` (Number): The number to convert.
  - **Returns:** (Object) The converted number with a summary of the conversion.

- **convertAndRoundUp**( conversionType, convertFrom, convertTo, numberToConvert, decimalPlaces )
  - **Parameters:**
    - `conversionType` (String): The type of conversion (e.g., 'temperature', 'length').
    - `convertFrom` (String): The unit to convert from (e.g., 'l', 'dl').
    - `convertTo` (String): The unit to convert to (e.g., 'gal', 'c').
    - `numberToConvert` (Number): The number to convert.
    - `decimalPlaces` (Number): The number of decimal places to round the converted number to
  - **Returns:** (Number) The converted number rounded up

### Parameters
Both full unit names and abbreviations work as parameters.
```javascript
const convertedTemperature = converter.convertTemperature('celsius', 'fahrenheit', 56)
volume
const convertedTemperature = converter.convertTemperature('C', 'F', 56)
```


Usage of upper or lower case letters does not matter.
This...
```javascript
const convertedWeight = converter.convertWeight('kg', 'lb', 24)
```
...returns the same result as this
```javascript
const convertedWeight = converter.convertWeight('Kg', 'Lb', 24)
```

The number parameter can also be a decimal.

<br>

The methods to convert a single value take three parameters
- **String**, the unit to convert from (i.e kg, in, l, C)
- **String**, the unit to convert to (i.e lb, cm, gal, F)
- **Number**, the number to convert

```javascript
const convertedTemperature = converter.convertTemperature('C', 'F', 35)
// Output: 95
```

convertMultipleValues() takes four parameters
- **String**, the conversion type i.e temperature, length, weight, volume
- **String**, the unit to convert from (i.e kg, in, l, C)
- **String**, the unit to convert to (i.e lb, cm, gal, F)
- **Array**, the array of numbers to convert

```javascript
const convertedValue = converter.convertMultipleValues('temperature', 'C', 'F', [-40, -20, 35, 50])
// Output: [-40, -4, 95, 122]
```

convertWithSummary() takes four parameters
- **String**, the conversion type i.e temperature, length, weight, volume
- **String**, the unit to convert from (i.e kg, in, l, C)
- **String**, the unit to convert to (i.e lb, cm, gal, F)
- **Number**, the number to convert

```javascript
const conversionSummary = converter.convertWithSummary('temperature', 'C', 'F', 35)
// Output: {
//   conversionType: temperature,
//   convertFrom: C,
//   convertTo: F,
//   numberToConvert: 34,
//   convertedNumber: 95
// }
```

convertAndRoundUp() takes five parameters
- **String**, the conversion type i.e temperature, length, weight, volume
- **String**, the unit to convert from (i.e kg, in, l, C)
- **String**, the unit to convert to (i.e lb, cm, gal, F)
- **Number**, the number to convert
- **Number** the number of decimal places to round the converted number to

```javascript
const convertedNumberRoundedUp = converter.convertAndRoundUp('temperature', 'C', 'F', 42, 1)
// Output: 107.6
```

### Restrictions
Only the previously listed available conversions can be used, the list is updated when new conversions are added. 

When sending the full unit name as a parameter, write it in **plural** (i.e kilograms, feet). Alternatively when using abbreviations write it in **singular** (i.e kg, ft). 
You can use the spellings of the available conversions listed previously as an example.

**Only the convertTemperature() method handles negative numbers.** In all other methods you must use numbers over 0. 

The convertTemperature only handles numbers **above the absolute freezing point** (-273.15°C or -459.67°F).

### Errors

1. **Conversion not available**
  - Thrown when an invalid unit is provided for conversion.
2. **Input must be a number**
  - Thrown when the input is not of the expected type (number).
3. **Input must be a string**
  - Thrown when the input is not of the expected type (string).
4. **Input must be an array**
  - Thrown when the input is not of the expected type (array).
5. **Number must be positive**
  - Thrown when a non-numeric value or a negative number (for methods other than `convertTemperature`) is provided.
6. **Temperature must be greater than or equal to -273.15°C**
  - Thrown by the `convertTemperature` method when the Celsius temperature is below the absolute freezing point.
7. **'Temperature must be greater than or equal to -459.67°F'**
  - Thrown by the `convertTemperature` method when the Fahrenheit temperature is below the absolute freezing point.

## Contribution

### Contributing
We welcome contributions to the Unit Converter Module! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes.
4. Submit a pull request with a detailed description of your changes.

### Bug Reports
If you encounter any bugs or issues, please report them by creating an issue on the [Issues page](https://github.com/h-mp/L2/issues). Please provide as much detail as possible.

/**
 * Module for the conversion coordinator class.
 * 
 * @author Hilja-Maria Paananen <hp222qn@student.lnu.se>
 */

import { LengthConverter } from './converters/length/LengthConverter.js'
import { TemperatureConverter } from './converters/temperature/TemperatureConverter.js'
import { SpeedConverter } from './converters/speed/SpeedConverter.js'
import { WeightConverter } from './converters/weight/WeightConverter.js'
import { VolumeConverter } from './converters/volume/VolumeConverter.js'

export class ConversionCoordinator {
  #lengthConverter
  #temperatureConverter
  #speedConverter
  #weightConverter
  #volumeConverter

  #conversionMethods

  constructor() {
    this.#lengthConverter = new LengthConverter()
    this.#temperatureConverter = new TemperatureConverter()
    this.#speedConverter = new SpeedConverter()
    this.#weightConverter = new WeightConverter()
    this.#volumeConverter = new VolumeConverter()

    this.#conversionMethods = {
      temperature: this.handleTemperatureConversion.bind(this),
      length: this.handleLengthConversion.bind(this),
      speed: this.handleSpeedConversion.bind(this),
      weight: this.handleWeightConversion.bind(this),
      volume: this.handleVolumeConversion.bind(this)
    }
  }

  /**
   * Chooses the conversion method based on the sent conversion type.
   * 
   * @param {String} conversionType - The conversion type
   * @throws {Error} - If the conversion is not available
   * @returns {Function} - The conversion method
   */
  chooseConversionMethod(conversionType) {
    const conversionMethod = this.#conversionMethods[conversionType.toLowerCase()]
    if (!conversionMethod) {
      throw new Error('Conversion not available')
    }
    return conversionMethod
  }

  handleTemperatureConversion(convertFrom, convertTo, numberToConvert) {
    return this.#temperatureConverter.convert(convertFrom, convertTo, numberToConvert)
  }

  handleLengthConversion(convertFrom, convertTo, numberToConvert) {
    return this.#lengthConverter.convert(convertFrom, convertTo, numberToConvert)
  }

  handleSpeedConversion(convertFrom, convertTo, numberToConvert) {
    return this.#speedConverter.convert(convertFrom, convertTo, numberToConvert)
  }

  handleWeightConversion(convertFrom, convertTo, numberToConvert) {
    return this.#weightConverter.convert(convertFrom, convertTo, numberToConvert)
  }

  handleVolumeConversion(convertFrom, convertTo, numberToConvert) {
    return this.#volumeConverter.convert(convertFrom, convertTo, numberToConvert)
  }
}

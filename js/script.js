// Created by: Zaida Hammel
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of a triangle.
 */
function calculate () {
  // input
  const radius = parseFloat(document.getElementById('radius-of-sphere').value)

  // process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3) 

  // output
  document.getElementById('volume').innerHTML = 'The volume is: ' + volume.toFixed(2) + ' mm³'
}

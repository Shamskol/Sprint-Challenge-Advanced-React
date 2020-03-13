import React from 'react';
import *  as rtl from '@testing-library/react';
import App from './App';


describe ("App", () =>{

  it ("test if when multiplying two numbers the correct answer is returned", ()=>{

    expect(2*2).toBe(4)
    expect(2*2).not.toBe(6)
    expect(2*2).not.toBe(-4)
    expect(-2*2).not.toBe(4)
    expect(-2*-2).toBe(4)
    expect(2*2).toBe(4)
  })
it ("test if when one number is added by another the correct answer is returned", ()=> {

  expect(4/2).toBe(2)
  expect(4/2).not.toBe(3)
  expect(4/2).not.toBe()
  expect(4/2).not.toBe(1)
  expect(5/2).toBe(2.5)
  expect(-8/2).not.toBe(4)
  expect(-8/2).toBe(-4)
  expect(3/2).not.toBe(1)
  expect(3/2).toBe(1.5)

})
it ("test if when one number is divided by another number the correct remainder is returned", () => {

expect(4 % 2).toBe(0)
expect(4 % 2).not.toBe(1)
expect(5 % 2).toBe(1)
expect(5 % 2).not.toBe(-1)
expect(4 % 3).toBe(1)
expect(4 % 3).not.toBe(0)
expect(5 % 2).toBe(1)
expect(5 % 2).not.toBe(2)
expect(5 %- 2).toBe(1)
expect(8%3).toBe(2)
expect(-8%3).toBe(-2)
expect(-8%3).not.toBe(2)
})

it ("test if when one an operand is raised to the power of another operand is  the correct answer  is returned", () => {

expect(2**3).toBe(8)
expect(2**3).not.toBe(7)
expect(3**2).toBe(9)
expect(2**3).not.toBe(7)
expect((-2)**3).toBe(-8)
expect((-2)**3).not.toBe(8)
expect(2**3).not.toBe(5)
expect((-2)**3).not.toBe(1)
expect((-2)**3).not.toBe(6)
expect(3**3).toBe(27)
expect(3**3).not.toBe(6)
})




})
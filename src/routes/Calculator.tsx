import React, {useState} from 'react';

import { Button } from "semantic-ui-react";

export const Calculator = () => {

  const[result, setResult] = useState<string>("0");

  const auxResult = 0;

  const solveResult = (value: string) => {



    if(value === "C"){
      setResult(() => {return "0"});
    }else{
      setResult((prevResult) => {return prevResult === ("0") ? value : (prevResult + value)});
    }


  }

  return (
    <>

      <div>
        <input type="text" value={result} />
      </div>
      <div>
        <Button onClick={() => {solveResult("7")}}>7</Button>
        <Button onClick={() => {solveResult("8")}}>8</Button>
        <Button onClick={() => {solveResult("9")}}>9</Button>
        <Button onClick={() => {solveResult("+")}}>+</Button>
      </div>
      <div>
        <Button onClick={() => {solveResult("4")}}>4</Button>
        <Button onClick={() => {solveResult("5")}}>5</Button>
        <Button onClick={() => {solveResult("6")}}>6</Button>
        <Button onClick={() => {solveResult("-")}}>-</Button>
      </div>
      <div>
        <Button onClick={() => {solveResult("1")}}>1</Button>
        <Button onClick={() => {solveResult("2")}}>2</Button>
        <Button onClick={() => {solveResult("3")}}>3</Button>
        <Button onClick={() => {solveResult("*")}}>*</Button>
      </div>
      <div>
        <Button onClick={() => {solveResult("0")}}>0</Button>
        <Button onClick={() => {solveResult(".")}}>.</Button>
        <Button onClick={() => {solveResult("=")}}>=</Button>
        <Button onClick={() => {solveResult("/")}}>/</Button>
      </div>
        <Button onClick={() => {solveResult("C")}}>C</Button>


    </>
  );
};

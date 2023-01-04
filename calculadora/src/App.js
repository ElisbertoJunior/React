import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row, Column } from "./styled";
import { useState } from "react";

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('')

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  };

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+') 
    } else {
    const sum = Number(firstNumber) + Number(currentNumber);
    setCurrentNumber(String(sum));
    setFirstNumber('0')
    setOperation('')

    }

  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')   
    } else {
    const minus = Number(firstNumber) - Number(currentNumber);
    setCurrentNumber(String(minus));
    setFirstNumber('0')
    setOperation('')
    }

  }

  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')   
    } else {
    const multiply = Number(firstNumber) * Number(currentNumber);
    setCurrentNumber(String(multiply));
    setFirstNumber('0')
    setOperation('')
    }

  }

  const handleDividedNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')   
    } else {
    const divided = Number(firstNumber) / Number(currentNumber);
    setCurrentNumber(String(divided));
    setFirstNumber('0')
    setOperation('')
    }

  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation) {
        case '+':
          handleSumNumbers();
          break;

          case '-':
          handleMinusNumbers();
          break;

          case '*':
          handleMultiplyNumbers();
          break;

          case '/':
          handleDividedNumbers();
          break;

          default:
            break;
      }
    }

  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="/" onClick={handleDividedNumbers}/>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="x" onClick={handleMultiplyNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        
      </Content>
    </Container>
  );
};

export default App;

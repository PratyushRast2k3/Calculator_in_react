import React from 'react'

function Calculator() {
  const [ calc,setCalc] = React.useState({
    current:"0",
    total:"0",
    isInitial: true, 
    preOp:""
  });
  function handleNumbers(value){
  let newValue = value;
  if(!calc.isInitial){
  newValue = calc.current + value;
  }
    setCalc({current:newValue,total:calc.total,isInitial:false, preOp:calc.preOp});

  }
  function doCalculation(){
    let total = parseInt(calc.total);

    switch(calc.preOp){
      case "+":
        total+= parseInt(calc.current);
        break;
      case "-":
        total-= parseInt(calc.current);
        break;
      case "*":
        total*= parseInt(calc.current);
        break;
      case "/":
        total/= parseInt(calc.current);
        break; 
      default:
        total = parseInt(calc.current);
    }
    return total;

  }
  function handleOperators(value){
    const total=doCalculation();
    setCalc({current:total.toString() ,total:total.toString(), isInitial:true,preOp:value});

    
  }
  function handleClear(){
    setCalc({
      current:"0",
      total:"0",
      isInitial: true, 
      preOp:""
    })

  }

  function renderDisplay(){
    return calc.current;
  }  
  return (
    <div className="calculator">
      <div className="display">{renderDisplay()}</div>
      <CalcButton value="7" onClick={handleNumbers}/>
      <CalcButton value="8" onClick={handleNumbers}/>
      <CalcButton value="9" onClick={handleNumbers}/>
      <CalcButton className='operators' value="/" onClick={handleOperators} />
      <CalcButton value="4" onClick={handleNumbers}/>
      <CalcButton value="5" onClick={handleNumbers}/>
      <CalcButton value="6" onClick={handleNumbers}/>
      <CalcButton className='operators' value="*" onClick={handleOperators}/>
      <CalcButton value="1" onClick={handleNumbers}/>
      <CalcButton value="2" onClick={handleNumbers}/>
      <CalcButton value="3" onClick={handleNumbers}/>
      <CalcButton className='operators' value="-" onClick={handleOperators}/>
      <CalcButton value="C" onClick={handleClear}/>
      <CalcButton value="0" onClick={handleNumbers}/>
      <CalcButton value="=" onClick={handleOperators}/>
      <CalcButton className='operators' value="+" onClick={handleOperators}/>
    </div>
  );
}
function CalcButton(props) {
  return (
    <button className={props.className} onClick={()=> props.onClick(props.value)}>{props.value}</button>
  );
}

export default Calculator
export {CalcButton}
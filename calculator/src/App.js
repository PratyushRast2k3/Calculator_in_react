
function Calculator() {
  function handleNumbers(){
    
  }
  function handleOperators(){

  }
  return (
    <div className="calculator">
      <div className="display">0</div>
      <CalcButton value="7" onClick={handleNumbers}/>
      <CalcButton value="8" onClick={handleNumbers}/>
      <CalcButton value="9" onClick={handleNumbers}/>
      <CalcButton className='operators' value="/" onclick={handleOperators} />
      <CalcButton value="4" onClick={handleNumbers}/>
      <CalcButton value="5" onClick={handleNumbers}/>
      <CalcButton value="6" onClick={handleNumbers}/>
      <CalcButton className='operators' value="*" onclick={handleOperators}/>
      <CalcButton value="1" onClick={handleNumbers}/>
      <CalcButton value="2" onClick={handleNumbers}/>
      <CalcButton value="3" onClick={handleNumbers}/>
      <CalcButton className='operators' value="-" onclick={handleOperators}/>
      <CalcButton value="C"/>
      <CalcButton value="0" onClick={handleNumbers}/>
      <CalcButton value="="/>
      <CalcButton className='operators' value="+" />
    </div>
  );
}
function CalcButton(props) {
  return (
    <button className={props.className} onClick={props.onClick}>{props.value}</button>
  );
}

export default Calculator
export {CalcButton}
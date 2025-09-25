import React,{useState} from 'react';
function Counter()
{
const[count,setCount]=useState(0);
const handleIncrement=()=>{
setCount(count+1);
};
return(
<div style={{textAkign:'center',marginTop:'50px'}}>
<h2>React Counter using useState</h2>
<p style={{fontSize:'24px'}}>Count:{count}</p>
<button onClick={handleIncrement} style={{fontSize:'16px',padding:'10px 20px'}}>
Increment
</button>
</div>
);
}
export default Counter;
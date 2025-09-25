import React from 'react';
import UserGreeting'./UserGreeting';
import UserInfo from'./UserInfo';
import './App.css';
function App()
{
const user={
name:'NOOR',
age:24
};
return(
<div className="app-container">
<div className="card">
<h2>Sharing Data Using Props</h2>
<UserInfo name={user.name} age={user.age}/>
</div>
</div>
);
}
export default App;
import React,{useState,useEffect} from 'react';
function UserList()
{
const[users,setUsers]=useState([]);
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(data=>setUsers(data))
.catch(error=>console.error('Error fetching data:',error));
},[]);
return(
<div style={{padding:'20px'}}>
<h2>User List(Fetched using useEffect)</h2>
<u1>
{users.map(user=>(
<li key={user.id}>
<strong>{user.name}</strong>-{user.email}
</li>
))} 
</u1>
</div>
);
}
export default UserList;
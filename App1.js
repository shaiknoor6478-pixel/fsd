import React,{useState}from 'react';
import'./App.css';
function App()
{
const[formData,setFormData]=useState({
name:",
email:",
message:"
});
const handleChange=(e)=>{
const{name,value}=e.target;
setFormData(prevState=>({
...prevState,
[name]:value
}));
};
const handleSubmit=(e)=>{
e.preventDefault();
alert('Form submitted:\nName:${formData.name}\nEmail:${formData.email}\nMessage:${formData.message}');
setFormData({name:",email:",message:"});
};
return(
<div className="form-container">
<h2>Contact Form</h2>
<form onSubmit={handleSubmit}>
<label>Name:</label>
<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
required
/>
<label>Email:</label>
<input
type="email"
name="email"
value={formData.name}
onChange={handleChange}
required
/>
<label>Message:</label>
<textarea
name="message"
value={formData.name}
onChange={handleChange}
required
></textarea>
<button type="submit">Submit</button>
</form>
</div>
);
}
export default App;
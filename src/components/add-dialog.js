import './add-dialog.css';
import React, {useState} from 'react';


const AddDialog = (props) => {
   const [inputs, setInputs] = useState({});
   const [result, setResult] = useState("");
   const onSubmit = async (event) => {
       event.preventDefault();
       setResult("Sending...");

       const formData = new FormData(event.target);

       const response = await fetch("https://serverside-4czo.onrender.com/api/locations/", {
           method: "POST",
           body: formData,
       });
       if (response.status === 200) {
           setResult("Location Successfully Added");
           event.target.reset();
           props.addLocation(await response.json());
           props.closeDialog();
         } else {
           console.log("Error adding location", response);
           setResult(response.message);
         }
   };


   const handleChange = (event)  => {
       const name = event.target.name;
       const value = event.target.value;
       setInputs((values) => ({...values, [name]: value}));
   };

   const handleImageChange = (event) => {
       const name = event.target.name;
       const value = event.target.files[0];
       setInputs((values) => ({ ...values, [name]: value }));
     };
  
   return (
       <div id="add-dialog" className="w3-modal">
     <div className="w3-modal-content">
       <div className="w3-container">
         <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeDialog}>
           &times;
         </span>
         <form id="add-property-form" onSubmit={onSubmit}>
           <p>
               <label htmlFor="name">Location Name:</label>
               <input type="text" id="name" name="name" value={inputs.name || ""} onChange={handleChange} required />
           </p>
           <section className="columns">
             <p id="img-prev-section">
               <img
                 id="img-prev"
                 src={
                   inputs.img != null ? URL.createObjectURL(inputs.img) : ""
                 }
                 alt=""
               />
             </p>
             <p id="img-upload">
               <label htmlFor="img">Upload Image:</label>
               <input
                 type="file"
                 id="img"
                 name="img"
                 onChange={handleImageChange}
                 accept=""
               />
             </p>
           </section>
           <p>
               <button type="submit">Submit</button>
           </p>
           <p>{result}</p>
         </form>
       </div>
     </div>
   </div>
 );
};

export default AddDialog;

import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for API requests
import './index.css'; // Import your CSS file

const BlogPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [imageAdded, setImageAdded] = useState(false); // New state to track if an image is added
  function convertToBase64(e){
   

    const convertToBase64 = event => {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = event => {
          const binaryString = event.target.result;
          setImages(binaryString);
        };
  
        reader.readAsBinaryString(file);
      }
    }
  }

   
  const handleSubmit = async () => {
    try {

      const data = {
        username: "kotesh",
        title:title,
        image:images,
        text:description,
        Comments:[]
      }
      const response = await axios.post('http://localhost:5000/blogs/add', data);
      
      console.log('Blog post created:', response.data);

      setTitle('');
      setDescription('');
      setImages([]);
      setImageAdded(false); // Reset imageAdded
    } catch (error) {
      console.error('Error creating blog post:', error);
    }
  };

  return (
    <div className="blog-editor">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      
      <div>
        <input type="file" onChange={convertToBase64}/>
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default BlogPost 

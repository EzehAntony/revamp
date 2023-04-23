"use client";
import axios from "axios";
import { useEffect, useState } from "react";
const admin = () => {
  const [file, setFile] = useState(null);
  const submit = async () => {
    if (!file) {
      console.log("No file here");
    } else {
      var formData = new FormData();
      formData.append("image", file);
      axios
        .post("https://api.imgur.com/3/image/", {
          headers: {
            Authorization: `Client-ID ${process.env.clientId}`,
          },
          data: formData,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} name="image" />
      <button onClick={() => submit()}>Submit</button>
    </div>
  );
};

export default admin;

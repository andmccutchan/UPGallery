import { supabase } from "@/supabase-client";
import React, { useState } from "react";

const SubmissionForm = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);

  const uploadFile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!imageFile) {
      console.error("No file selected");
      return;
    }

    const {data, error} = await supabase.storage
      .from('rice-images')
      .upload('test file', imageFile)

    if (error) {
      console.error("File upload error:", error);
    } else {
      console.log("Upload successful:", data);
    }
    setImageFile(null);
  }

  return <> 
    <form className="border rounded-2xl p-4" onSubmit={uploadFile}>
      <input type="file" onChange={(e) => {
        const file = e.target.files?.[0];
        if (file) setImageFile(file);
       }}/>
       <button type="submit">Upload</button>
    </form>
  </>;
};

export default SubmissionForm;

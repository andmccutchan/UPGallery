import { supabase } from "@/supabase-client";
import { useState } from "react";

const SubmissionForm = () => {
  const [title, setTitle] = useState("");
  const [distribution, setDistribution] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File | null>(null);
  //   const [tags, setTags] = useState([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!images) {
      alert("Please select an image");
      return;
    }

    const fileExt = images.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("rice-images")
      .upload(filePath, images);

    if (uploadError) {
      console.error("Upload failed:", uploadError);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from("rice-images")
      .getPublicUrl(filePath);

    const publicUrl = publicUrlData.publicUrl;

    const { error: insertError } = await supabase.from("rice-info").insert([
      {
        title,
        distribution,
        description,
        images: [publicUrl],
      },
    ]);

    if (insertError) {
      console.error("Insert error:", insertError);
    } else {
      alert("Post submitted!");
      setTitle("");
      setDescription("");
      setDistribution("");
      setImages(null);
    }
  };

  return (
    <form className="border" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={distribution}
        onChange={(e) => setDistribution(e.target.value)}
        placeholder="Distro"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (optional)"
      />
      <input
        type="file"
        accept="imagge/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) setImages(file);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmissionForm;

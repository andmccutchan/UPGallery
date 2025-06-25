import { supabase } from "@/supabase-client";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const distributions = [
  {
    value: "arch",
    label: "Arch",
  },
  {
    value: "fedora",
    label: "Fedora",
  },
  {
    value: "ubuntu",
    label: "Ubuntu",
  },
  {
    value: "debian",
    label: "Debian",
  },
  {
    value: "mint",
    label: "Mint",
  },
  {
    value: "red-hat",
    label: "Red Hat",
  },
  {
    value: "cent-os",
    label: "CentOS",
  },
];

const SubmissionForm = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const uploadFile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!imageFile) {
      console.error("No file selected");
      return;
    }

    const { data, error } = await supabase.storage
      .from("rice-images")
      .upload(imageFile.name, imageFile);

    if (error) {
      console.error("File upload error:", error);
    } else {
      console.log("Upload successful:", data);
    }
    setImageFile(null);
  };

  return (
    <>
      <form className="border rounded-2xl p-4 shadow" onSubmit={uploadFile}>
        <input type="text" id="title" />
        <label htmlFor="images">Attach screenshots</label>
        <input
          id="images"
          type="file"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setImageFile(file);
          }}
        />
        <button className="border px-4 py-1 rounded-2xl" type="submit">
          Upload
        </button>
      </form>
    </>
  );
};

export default SubmissionForm;

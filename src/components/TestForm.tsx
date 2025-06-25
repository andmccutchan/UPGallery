import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { fi } from "zod/v4/locales";
import { supabase } from "@/supabase-client";
import { UNSAFE_RemixErrorBoundary } from "react-router-dom";

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

const formSchema = z.object({
  distro: z.string().min(1, "Please select a distro"),
  description: z
    .string()
    .min(1, "Please give a brief description of your rice"),
  images: z.any().refine((files) => files && files.length > 0, {
    message: "Please upload at least one image",
  }),
});

const TestForm = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      distro: "",
      description: "",
      images: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const fileList = values.images as FileList;

    if (!fileList || fileList.length === 0) {
      console.error("No files uploaded");
      return;
    }

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error("User not logged in");
      return;
    }

    const userId = user.id;

    // Upload all files and collect their public URLs
    const uploadResults = await Promise.all(
      Array.from(fileList).map(async (file) => {
        const filePath = `${userId}/${Date.now()}-${file.name}`;

        const { error: uploadError } = await supabase.storage
          .from("rice-images")
          .upload(filePath, file);

        if (uploadError) {
          console.error(`Error uploading ${file.name}:`, uploadError.message);
          return null;
        }

        const { data: publicUrlData } = supabase.storage
          .from("rice-images")
          .getPublicUrl(filePath);

        return publicUrlData?.publicUrl ?? null;
      })
    );

    const imageUrl = uploadResults.filter((url) => url !== null);

    const { error: insertError } = await supabase.from("rice-info").insert({
      distro: values.distro,
      description: values.description,
      imageUrl: imageUrl,
      user_id: userId,
    });

    if (insertError) {
      console.error("Error inserting into database:", insertError.message);
    } else {
      console.log("All files uploaded and metadata inserted!");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="distro"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[200px] justify-between"
                    >
                      {value
                        ? distributions.find(
                            (distributions) => distributions.value === value
                          )?.label
                        : "Select distro..."}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Select distro..."
                        className="h-9"
                      />
                      <CommandList>
                        <CommandEmpty>No distro found.</CommandEmpty>
                        <CommandGroup>
                          {distributions.map((distribution) => (
                            <CommandItem
                              key={distribution.value}
                              value={distribution.value}
                              onSelect={(currentValue) => {
                                const newValue =
                                  currentValue === value ? "" : currentValue;
                                setValue(newValue);
                                field.onChange(newValue);
                                setOpen(false);
                              }}
                            >
                              {distribution.label}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  value === distribution.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description..." {...field} />
              </FormControl>
              <FormDescription>
                A brief description of your rice
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  multiple
                  onChange={(e) => {
                    field.onChange(e.target.files);
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default TestForm;

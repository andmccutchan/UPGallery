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
  distro: z.string(),
});

const TestForm = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      distro: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default TestForm;

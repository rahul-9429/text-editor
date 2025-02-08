"use client";

import TextEditor from "@/components/TextEditor";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";

interface FormValues {
  post: string;
}

export default function Home() {
  const form = useForm<FormValues>({
    mode: "onTouched",
    defaultValues: {
      post: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const handleClick = () => {
    alert("No Functionality");
  };

  return (
    <div className="h-screen">
      <div className="w-[90%] m-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="post"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="post">
                  <h1 className="text-4xl text-emerald-700/70 font-mono"> Text Editor</h1>

                  </FormLabel>
                  <FormControl>
                    <TextEditor
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <span className="flex gap-1">
            <button
              type="button"
              onClick={handleClick}
              className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
            >
            Html Code
            </button>
            <button
              type="button"
              onClick={handleClick}
              className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
            >
              Submit
            </button>
            </span>
           
          </form>
        </Form>
      </div>
    </div>
  );
}

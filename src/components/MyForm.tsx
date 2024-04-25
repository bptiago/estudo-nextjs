"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ComponentPropsWithoutRef } from "react";

export type field = {
  name: string;
  type: string;
  pattern?: string;
};

type formProps = {
  title: string;
  fields: field[];
  submitButtonText: string;
} & ComponentPropsWithoutRef<"form">;

export default function MyForm({
  title,
  fields,
  onSubmit,
  submitButtonText,
  ...props
}: formProps) {
  return (
    <form
      action=""
      className="w-1/4 min-w-96 text-center space-y-6 rounded-lg border p-8"
      onSubmit={onSubmit}
      {...props}
    >
      <h1 className="text-2xl font-semibold tracking-wide">{title}</h1>
      {fields.map(({ name, type, pattern }, index) => {
        return (
          <Input
            key={index}
            type={type}
            name={name}
            placeholder={name[0].toUpperCase() + name.slice(1)}
            pattern={pattern}
            required
          />
        );
      })}
      <Button className="w-full" type="submit">
        {submitButtonText}
      </Button>
    </form>
  );
}

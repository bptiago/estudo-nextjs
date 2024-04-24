"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";

export type field = {
  name: string;
  type: string;
  pattern?: string;
};

type formProps = {
  fields: field[];
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function MyForm({ fields, onSubmit }: formProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <form
        action=""
        className="w-1/4 min-w-96 text-center space-y-6 rounded-lg border p-8"
        onSubmit={onSubmit}
      >
        <h1 className="text-2xl font-semibold tracking-wide">Login</h1>
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
          Log In
        </Button>
      </form>
    </main>
  );
}

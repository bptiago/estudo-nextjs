"use client";

import MyForm, { field } from "@/components/MyForm";
import { FormEvent } from "react";

export default function Login() {
  const fields: field[] = [
    {
      name: "email",
      type: "email",
    },
    {
      name: "password",
      type: "password",
      pattern:
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$",
    },
  ];

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = formData.getAll("input");
    console.log(values);
    return;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyForm fields={fields} onSubmit={onSubmit} />
    </main>
  );
}

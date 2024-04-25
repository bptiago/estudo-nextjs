"use client";
import { useToast } from "@/components/ui/use-toast";
import MyForm, { field } from "@/components/MyForm";
import { FormEvent, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Comment() {
  const [comments, setComments] = useState<CommentData[]>([]);
  const { toast } = useToast();

  const fields: field[] = [
    {
      name: "title",
      type: "text",
    },
    {
      name: "comment",
      type: "text",
    },
  ];

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    setComments((prevComments) => {
      const newComment: CommentData = {
        id: Math.floor(Math.random() * 10),
        title: formData.get("title")!.toString(),
        content: formData.get("comment")!.toString(),
      };

      return [...prevComments, newComment];
    });

    event.currentTarget.reset();
    toast({
      description: "Your comment has been sent.",
      duration: 3000,
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center space-y-16 p-24">
      <MyForm
        title="Write a comment!"
        fields={fields}
        submitButtonText="Comment"
        onSubmit={onSubmit}
      />
      <div className="grid grid-auto-rows grid-cols-4 gap-4 justify-center">
        {comments.map(({ id, title, content }, index) => (
          <Card key={index} className="text-center w-72">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{content}</p>
            </CardContent>
            <CardFooter className="justify-center">
              <p>Posted by user: {id}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

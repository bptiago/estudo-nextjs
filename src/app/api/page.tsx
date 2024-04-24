import { getApiData } from "@/lib/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Jeito apropriado de fazer um fetch. Também dá para usar Zod.
export default async function Api() {
  const data = (await getApiData(
    "https://jsonplaceholder.typicode.com/todos/"
  )) as RawTodoData[];

  const todos: TodoData[] = data.map((todo) => {
    return {
      userId: todo.userId,
      title: todo.title,
      completed: todo.completed,
    };
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-auto-rows grid-cols-4 gap-4">
        {todos.map(({ userId, title, completed }, index) => (
          <Card key={index} className="text-center w-72">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Completed: {completed ? "Yes!" : "No."}</p>
            </CardContent>
            <CardFooter>
              <p>Posted by user: {userId}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

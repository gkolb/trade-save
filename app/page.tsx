import { Button } from "@/components/ui/button";
import { ClassMenu } from "@/components/ui/ClassMenu";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to Trade Save</h1>
      <ClassMenu />
      <Button>Add Trade</Button>
    </main>
  );
}

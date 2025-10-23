import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <Button>Click me</Button>

      {JSON.stringify(users)}
    </div>
  );
}

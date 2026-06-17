import React from "react";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import DashboardConsole from "@/components/DashboardConsole";

export default async function DashboardPage() {
  // 1. Secure Server-Side Gate check
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  // 2. Wrap the logout functionality cleanly to be executed securely
  const handleSignOut = async () => {
    "use server";
    await signOut({ redirectTo: "/sign-in" });
  };

  // 3. Inject the data straight into the state-driven client console layout
  return (
    <DashboardConsole 
      sessionUser={{
        name: session.user.name,
        email: session.user.email,
        image: session.user.image
      }} 
      logoutAction={handleSignOut}
    />
  );
}
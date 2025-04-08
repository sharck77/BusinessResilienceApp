import React from "react";
import CrisisSteps from "./components/CrisisSteps";
import Roles from "./components/Roles";
import Info from "./components/Info";
import ActionLog from "./components/ActionLog";
import Admin from "./components/Admin";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { SunMoon } from "lucide-react";
import { motion } from "framer-motion";
import { toggleDarkMode } from "./utils/theme";

export default function BusinessResilienceApp() {
  return (
<div className="p-4 max-w-5xl mx-auto min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Business Resilience Dashboard</h1>
        <Button variant="ghost" onClick={toggleDarkMode}>
  <SunMoon className="w-5 h-5" />
</Button>
      </div>

      <Tabs defaultValue="crisis-steps" className="w-full">
        <TabsList className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
          <TabsTrigger value="crisis-steps">🧭 Crisis Steps</TabsTrigger>
          <TabsTrigger value="roles">👥 Roles</TabsTrigger>
          <TabsTrigger value="info">📘 Info</TabsTrigger>
          <TabsTrigger value="log">📝 Action Log</TabsTrigger>
          <TabsTrigger value="admin">🔧 Admin</TabsTrigger>
        </TabsList>

        <TabsContent value="crisis-steps"><motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}><CrisisSteps /></motion.div></TabsContent>
        <TabsContent value="roles"><motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}><Roles /></motion.div></TabsContent>
        <TabsContent value="info"><motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}><Info /></motion.div></TabsContent>
        <TabsContent value="log"><motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}><ActionLog /></motion.div></TabsContent>
        <TabsContent value="admin"><motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}><Admin /></motion.div></TabsContent>
      </Tabs>
    </div>
  );
}

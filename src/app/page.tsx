"use client";

import { motion } from "motion/react";
import { Logo } from "@/components/logo";

const HomePage = () => {
  return (
    <main>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center">
        <Logo size={160} animated />

        <div className="text-center -translate-y-2">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-2xl font-light tracking-tighter leading-tight"
          >
            overburrow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-muted-foreground text-sm"
          >
            overdigging gophers
          </motion.p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;

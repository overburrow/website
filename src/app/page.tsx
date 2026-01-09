import { GameOfLife } from "@/components/game-of-life";
import { Logo } from "@/components/logo";

const HomePage = () => {
  return (
    <main>
      <GameOfLife
        opacity={0.5}
        className="w-svw h-svh fixed top-0 left-0 -z-10"
      />

      <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center">
        <Logo size={160} animated className="mb-1" />

        <div className="text-center -translate-y-2">
          <h2 className="text-3xl tracking-tighter leading-tight">
            overburrow
          </h2>
          <p className="text-muted-foreground">overdigging gophers</p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;

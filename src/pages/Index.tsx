import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Arcane Trials — Boss Battle Quiz";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute("content", "Boss Battle Quiz: trivia meets RPG combat. Answer questions to defeat epic bosses.");
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="max-w-xl w-full text-center space-y-6 rounded-2xl border border-border p-10 bg-card shadow-lg">
        <h1 className="text-4xl font-bold tracking-tight">Arcane Trials</h1>
        <p className="text-muted-foreground">
          A boss battle quiz game. Answer trivia to slay epic foes, build combos, cast spells, and climb the leaderboard.
        </p>
        <a
          href="/boss-battle.html"
          className="inline-block px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold tracking-wide hover:opacity-90 transition"
        >
          Enter the Arena
        </a>
      </div>
    </main>
  );
};

export default Index;

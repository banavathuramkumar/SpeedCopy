import CustomizerView from "./components/CustomizerView";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">

      {/* Customizer View Core Workspace */}
      <main className="flex-1">
        <CustomizerView />
      </main>

    </div>
  );
}
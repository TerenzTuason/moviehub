import MoviesGrid from "./components/MoviesGrid";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div>
        <NavBar />
      </div>
      <div>
        <MoviesGrid />  
      </div>
    </div>
  );
}

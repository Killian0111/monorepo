import axios from "axios";
import { useEffect, useState } from "react";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/programs")
      .then((response) => {
        setPrograms(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des séries :", error);
        setError("Impossible de charger les séries");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Chargement des séries...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h1>Liste des séries</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h2>
              {program.title} ({program.year})
            </h2>
            <img src={program.poster} alt={program.title} />
            <p>{program.synopsis}</p>
            <p>
              <strong>Pays :</strong> {program.country}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgramsPage;

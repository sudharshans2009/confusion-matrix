import { useState } from "react";
import "./App.css";

function App() {
  const [tp, setTp] = useState(0);
  const [fp, setFp] = useState(0);
  const [fn, setFn] = useState(0);
  const [tn, setTn] = useState(0);
  const [results, setResults] = useState({
    accuracy: "...",
    precision: "...",
    recall: "...",
    f1Score: "...",
  });

  const calculateMetrics = () => {
    const total = tp + fp + fn + tn;
    const accuracy = total ? (tp + tn) / total : 0;
    const precision = tp + fp ? tp / (tp + fp) : 0;
    const recall = tp + fn ? tp / (tp + fn) : 0;
    const f1Score =
      precision + recall ? (2 * precision * recall) / (precision + recall) : 0;

    setResults({
      accuracy: accuracy.toFixed(3),
      precision: precision.toFixed(3),
      recall: recall.toFixed(3),
      f1Score: f1Score.toFixed(3),
    });
  };

  const percentage = (key) =>
    (key === "..." ? "..." : key * 100).toFixed(1).toString() + "%";

  return (
    <div className="container">
      <h2>Confusion Matrix Metrics Calculator</h2>
      <div className="grid">
        <input
          type="number"
          placeholder="TP"
          onChange={(e) => setTp(Number(e.target.value) || 0)}
        />
        <input
          type="number"
          placeholder="FP"
          onChange={(e) => setFp(Number(e.target.value) || 0)}
        />
        <input
          type="number"
          placeholder="FN"
          onChange={(e) => setFn(Number(e.target.value) || 0)}
        />
        <input
          type="number"
          placeholder="TN"
          onChange={(e) => setTn(Number(e.target.value) || 0)}
        />
      </div>
      <button onClick={calculateMetrics}>Calculate</button>
      {results.accuracy !== "..." && (
        <div className="results">
          <p>
            <strong>Accuracy:</strong> {results.accuracy} or{" "}
            {percentage(results.accuracy)}
          </p>
          <p>
            <strong>Precision:</strong> {results.precision} or{" "}
            {percentage(results.precision)}
          </p>
          <p>
            <strong>Recall:</strong> {results.recall} or{" "}
            {percentage(results.recall)}
          </p>
          <p>
            <strong>F1 Score:</strong> {results.f1Score} or{" "}
            {percentage(results.f1Score)}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;

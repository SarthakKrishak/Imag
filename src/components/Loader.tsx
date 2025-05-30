import { useEffect, useState } from "react";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
interface LoaderDemoProps {
  onLoadingComplete: () => void;
}

const LoaderDemo = ({ onLoadingComplete }: LoaderDemoProps) => {
  const [loading, setLoading] = useState(true);

  const loadingStates = [
    { text: "Initializing experience..." },
    { text: "Building innovation stack..." },
    { text: "Crafting seamless tech..." },
    { text: "Welcome to Imaginum!" },
  ];

  useEffect(() => {
    const totalDuration = 1100 * loadingStates.length;

    if (loading) {
      document.body.classList.add("no-scroll");
    }

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("no-scroll");
      onLoadingComplete();
    }, totalDuration);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("no-scroll");
    };
  }, [loadingStates.length, onLoadingComplete]);

  return (
    <div
      className={`absolute w-full h-full flex items-center justify-center overflow-hidden ${
        !loading ? "pointer-events-none" : ""
      }`}
      style={{
        opacity: loading ? 1 : 0,
        transition: "opacity 0.8s ease-in-out",
        zIndex: loading ? 50 : -1,
      }}
    >
      <Loader loadingStates={loadingStates} loading={loading} duration={1200} />
    </div>
  );
};

export default LoaderDemo;

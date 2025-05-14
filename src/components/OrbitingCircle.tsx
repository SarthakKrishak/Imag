import {
  Figma,
  Github,
  Code2,
  FileCode,
  LayoutGrid,
  Database,
} from "lucide-react";

const Icons = [
  <Figma key="figma" className="text-pink-500 w-5 h-5" />,
  <Github key="github" className="text-gray-800 w-5 h-5" />,
  <Code2 key="nextjs" className="text-indigo-600 w-5 h-5" />,
  <Database key="mongo" className="text-green-500 w-5 h-5" />,
  <FileCode key="js" className="text-yellow-400 w-5 h-5" />,
  <LayoutGrid key="html" className="text-orange-500 w-5 h-5" />,
];

const OrbitingCirclesAnimation = () => {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="relative w-[min(90vw,400px)] aspect-square">
        {/* Orbit Lines (Super Light Gray) */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(180,180,180,0.15)"
            strokeWidth="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="28"
            fill="none"
            stroke="rgba(180,180,180,0.15)"
            strokeWidth="0.5"
          />
        </svg>

        {/* Outer Icons (3) */}
        <div className="absolute inset-0 animate-spin-slow">
          {Icons.slice(0, 3).map((icon, i) => {
            const angle = (i / 3) * 2 * Math.PI;
            const radius = 45;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            return (
              <div
                key={i}
                className="absolute w-12 h-12 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-md flex items-center justify-center hover:scale-110 transition-transform"
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {icon}
              </div>
            );
          })}
        </div>

        {/* Inner Icons (3) */}
        <div className="absolute inset-0 animate-spin-slow-reverse">
          {Icons.slice(3).map((icon, i) => {
            const angle = (i / 3) * 2 * Math.PI;
            const radius = 28;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            return (
              <div
                key={i}
                className="absolute w-11 h-11 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-md flex items-center justify-center hover:scale-110 transition-transform"
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {icon}
              </div>
            );
          })}
        </div>

        {/* Center Core with Gradient Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-20 h-20 flex items-center justify-center">
            {/* Gradient Glow Aura */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-blue-500 to-purple-500 blur-xl opacity-60 animate-pulse" />
            {/* Center Logo */}
            <div className="w-20 h-20 bg-gradient-to-tr from-pink-500 via-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-md border border-white/20 relative z-10">
              <div className="w-12 h-12 backdrop-blur-md bg-white/20 border border-white/30 rounded-full flex items-center justify-center shadow-md">
                <img src="/logo.svg" alt="logo" className="w-11 h-11" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrbitingCirclesAnimation;

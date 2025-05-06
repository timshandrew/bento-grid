import fiveStarsImg from "./assets/images/illustration-five-stars.webp";
import multiplePathsImg from "./assets/images/illustration-multiple-platforms.webp";
import scheduleImg from "./assets/images/illustration-consistent-schedule.webp";

function App() {
  return (
    <div>
      <div className="m-1 flex flex-col place-items-center rounded-lg bg-purple-500 p-9 text-white">
        <h1 className="text-preset-1 text-center">
          Social Media <span className="text-yellow-500">10x</span>
          <span className="italic">Faster</span> with AI
        </h1>
        <img src={fiveStarsImg} />
        <span className="text-preset-4 font-dm-sans-reg">
          Over 4,000 5-star reviews
        </span>
      </div>

      <div className="m-1 rounded-lg bg-white p-2">
        <img src={multiplePathsImg} />
        <h1 className="text-preset-3">
          Manage multiple accounts and platforms.
        </h1>
      </div>

      <div className="m-1 rounded-lg bg-yellow-500 p-2 pb-0">
        <h1 className="text-preset-3 mb-2">
          Maintain a consistent posting schedule.
        </h1>
        <img src={scheduleImg} />
      </div>
    </div>
  );
}

export default App;

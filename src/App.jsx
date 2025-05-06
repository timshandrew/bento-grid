import fiveStarsImg from "./assets/images/illustration-five-stars.webp";
import multiplePathsImg from "./assets/images/illustration-multiple-platforms.webp";
import consistent from "./assets/images/illustration-consistent-schedule.webp";
import scheduleImg from "./assets/images/illustration-schedule-posts.webp";
import growthImg from "./assets/images/illustration-grow-followers.webp";

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
        <img src={consistent} />
      </div>

      <div className="m-1 rounded-lg bg-purple-100 p-2">
        <h1 className="text-preset-3 mb-3">Schedule to social media</h1>
        <img className="mb-3" src={scheduleImg} />
        <span className="text-preset-4 font-dm-sans-reg block text-center">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </span>
      </div>

      <div className="rounded-lg bg-purple-500 p-3 text-white">
        <img className="mx-auto mb-5" src={growthImg} />
        <h1 className="text-preset-2 text-center">
          Grow followers with non-stop content.
        </h1>
      </div>
    </div>
  );
}

export default App;

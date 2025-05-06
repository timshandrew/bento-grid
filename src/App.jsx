import fiveStarsImg from "./assets/images/illustration-five-stars.webp";
import multiplePathsImg from "./assets/images/illustration-multiple-platforms.webp";
import consistentImg from "./assets/images/illustration-consistent-schedule.webp";
import scheduleImg from "./assets/images/illustration-schedule-posts.webp";
import growthImg from "./assets/images/illustration-grow-followers.webp";
import audienceImg from "./assets/images/illustration-audience-growth.webp";
import createPostImg from "./assets/images/illustration-create-post.webp";
import aiContentImg from "./assets/images/illustration-ai-content.webp";

function App() {
  return (
    <div className="m-3 grid gap-3">
      <div className="flex flex-col place-items-center rounded-lg bg-purple-500 p-9 text-white">
        <h1 className="text-preset-1 text-center">
          Social Media <span className="text-yellow-500">10x</span>
          <span className="italic">Faster</span> with AI
        </h1>
        <img src={fiveStarsImg} />
        <span className="text-preset-4 font-dm-sans-reg">
          Over 4,000 5-star reviews
        </span>
      </div>

      <div className="rounded-lg bg-white p-2">
        <img src={multiplePathsImg} />
        <h1 className="text-preset-3">
          Manage multiple accounts and platforms.
        </h1>
      </div>

      <div className="rounded-lg bg-yellow-500 p-2 pb-0">
        <h1 className="text-preset-3 mb-2">
          Maintain a consistent posting schedule.
        </h1>
        <div
          className={`ms-auto h-17 w-full bg-no-repeat md:h-30 bg-[url(${consistentImg})] bg-clip bg-auto`}
        />
      </div>

      <div className="rounded-lg bg-purple-100 p-2">
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

      <div className="rounded-lg bg-white p-3">
        <h1 className="text-preset-4 font-dm-sans-reg mb-3">
          <span className="text-preset-1 font-dm-sans-med block">&gt;56%</span>{" "}
          faster audience growth
        </h1>
        <img src={audienceImg} />
      </div>

      <div className="rounded-lg bg-yellow-100 p-4">
        <h1 className="text-preset-2 mb-3">
          Create and schedule content{" "}
          <span className="text-purple-500">quicker</span>
        </h1>
        <img src={createPostImg} />
      </div>

      <div className="rounded-lg bg-yellow-500 p-3">
        <h1 className="text-preset-2 mb-3">Write your content using AI.</h1>
        <img src={aiContentImg} />
      </div>
    </div>
  );
}

export default App;

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
    <div className="mx-auto my-3 grid max-w-52 gap-4 md:max-w-100 md:grid-cols-2 lg:min-h-[calc(100vh-var(--spacing)*3*2)] lg:max-w-175 lg:grid-cols-4 lg:grid-rows-[20rem_5rem_15rem_20rem]">
      <div className="flex flex-col place-items-center rounded-2xl bg-purple-500 p-5 text-white md:col-span-2 lg:col-span-2 lg:col-start-2 lg:row-start-1">
        <h1 className="text-preset-1 mb-3 text-center">
          Social Media <span className="text-yellow-500">10x</span>
          <span className="italic"> Faster</span> with AI
        </h1>
        <img className="mb-1" src={fiveStarsImg} />
        <span className="text-preset-4 font-dm-sans-reg">
          Over 4,000 5-star reviews
        </span>
      </div>

      <div className="rounded-2xl bg-white p-3 md:col-span-1 md:flex md:flex-col md:place-content-between lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-2">
        <img className="mb-2" src={multiplePathsImg} />
        <h1 className="text-preset-3 md:w-7/10">
          Manage multiple accounts and platforms.
        </h1>
      </div>

      <div className="h-32 overflow-clip rounded-2xl bg-yellow-500 pt-2 pl-2 md:col-span-1 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-2 lg:flex lg:h-full lg:flex-col lg:justify-between lg:pe-2">
        <h1 className="text-preset-3 mb-2">
          Maintain a consistent posting schedule.
        </h1>
        <img
          className="w-full object-cover md:max-w-3/4 lg:max-w-none"
          src={consistentImg}
        />
      </div>

      <div className="flex flex-col place-items-center overflow-clip rounded-2xl bg-purple-100 p-2 md:col-span-2 md:px-34 lg:col-span-1 lg:col-start-4 lg:row-span-3 lg:row-start-1 lg:justify-center lg:p-5 lg:pr-0">
        <h1 className="text-preset-3 mb-3 text-center lg:text-left">
          Schedule to social media.
        </h1>
        <img
          className="mb-3 lg:w-60 lg:max-w-none lg:self-start"
          src={scheduleImg}
        />
        <span className="text-preset-4 font-dm-sans-reg block text-center lg:pe-3 lg:text-left">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </span>
      </div>

      <div className="rounded-2xl bg-purple-500 p-4 text-white md:col-span-2 md:flex md:place-items-center md:px-8 lg:col-span-2 lg:col-start-3 lg:row-start-4">
        <img className="mx-auto mb-5 md:mb-0 md:h-30" src={growthImg} />
        <h1 className="text-preset-2 text-center">
          Grow followers with non-stop content.
        </h1>
      </div>

      <div className="items-center justify-between rounded-2xl bg-white p-3 md:col-span-2 md:flex lg:col-span-1 lg:col-start-2 lg:row-start-3 lg:row-start-4 lg:flex-col">
        <h1 className="text-preset-4 font-dm-sans-reg mb-3 md:mb-0 md:h-min">
          <span className="text-preset-1 font-dm-sans-med mb-2 block">
            &gt;56%
          </span>
          faster audience growth
        </h1>
        <img src={audienceImg} />
      </div>

      <div className="rounded-2xl bg-yellow-100 p-4 md:flex md:flex-col md:justify-center lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-1">
        <h1 className="text-preset-2 mb-3">
          Create and schedule content
          <span className="text-purple-500 italic"> quicker</span>
        </h1>
        <img src={createPostImg} />
      </div>

      <div className="rounded-2xl bg-yellow-500 p-3 lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:flex lg:flex-col lg:justify-between">
        <h1 className="text-preset-2 mb-3">Write your content using AI.</h1>
        <img className="w-40" src={aiContentImg} />
      </div>
    </div>
  );
}

export default App;

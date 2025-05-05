import fiveStarsImg from "./assets/images/illustration-five-stars.webp";

function App() {
    return (
        <div className="bg-purple-500 text-white m-1 rounded-lg p-9">
            <div className="flex flex-col  place-items-center">
                <h1 className="text-preset-1 text-center">
                    Social Media <span className="text-yellow-500">10x</span>
                    <span className="italic">Faster</span> with AI
                </h1>
                <img src={fiveStarsImg} />
                <span className="text-preset-4 font-dm-sans-reg">
                    Over 4,000 5-star reviews
                </span>
            </div>
        </div>
    );
}

export default App;

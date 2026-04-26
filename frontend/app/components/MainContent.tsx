type NextLive = {
  game: string;
  gameImage: string | null;
  date: string;
  time: string;
};

type MainContentProps = {
  about: string;
  nextLive: NextLive;
};

export default function MainContent({ about, nextLive }: MainContentProps) {
  return (
    <section className="grid grid-cols-2 gap-16 py-16">
      <div>
        <h2 className="font-mono font-bold text-base mb-4">About me</h2>
        <p className="font-sans text-sm leading-relaxed text-gray-700">
          {about}
        </p>
      </div>
      <div className="flex flex-col items-end">
        <h2 className="font-mono font-bold text-base mb-4">Next live</h2>
        <div className="w-36 h-48 bg-gray-200 rounded overflow-hidden">
          {nextLive.gameImage ? (
            <img
              src={nextLive.gameImage}
              alt={nextLive.game}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-xs text-gray-400 text-center px-2">
                {nextLive.game}
              </span>
            </div>
          )}
        </div>
        <p className="font-sans text-sm text-gray-700 mt-2 text-right">
          {nextLive.date}
          <br />
          {nextLive.time}
        </p>
      </div>
    </section>
  );
}

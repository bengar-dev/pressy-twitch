import { SiTwitch } from "react-icons/si";

type TwitchEmbedProps = {
  channel: string;
  parent: string;
};

export default function TwitchEmbed({ channel, parent }: TwitchEmbedProps) {
  const src = `https://player.twitch.tv/?channel=${channel}&parent=${parent}&autoplay=false`;

  return (
    <section>
      <div className="w-full aspect-video bg-gray-900">
        <iframe
          src={src}
          className="w-full h-full"
          allowFullScreen
          title={`${channel} Twitch stream`}
        />
      </div>
      <div className="flex justify-end mt-3">
        <a
          href={`https://twitch.tv/${channel}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded text-white text-sm font-sans"
          style={{ backgroundColor: "#9146FF" }}
        >
          <SiTwitch size={16} />
          see on twitch.tv
        </a>
      </div>
    </section>
  );
}

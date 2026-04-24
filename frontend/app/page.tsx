import { headers } from "next/headers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import TwitchEmbed from "./components/TwitchEmbed";

const data = {
  username: "pressycw",
  tagline: "multigaming streamer since 2007",
  isLive: false,
  twitchChannel: "katkame",
  socials: [
    { platform: "instagram" as const, url: "https://instagram.com/pressycw" },
  ],
  about:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  nextLive: {
    game: "Counter Strike 2",
    gameImage: null,
    date: "Tues, 20 may",
    time: "20h",
  },
};

export default async function Page() {
  const headersList = await headers();
  const host = headersList.get("host") ?? "localhost";
  const twitchParent = host.split(":")[0];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full max-w-4xl mx-auto px-6">
        <Header
          username={data.username}
          tagline={data.tagline}
          isLive={data.isLive}
          socials={data.socials}
        />
        <TwitchEmbed channel={data.twitchChannel} parent={twitchParent} />
        <MainContent about={data.about} nextLive={data.nextLive} />
      </main>
      <Footer />
    </div>
  );
}

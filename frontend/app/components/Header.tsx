import { FaInstagram } from "react-icons/fa6";

type Social = {
  platform: "instagram";
  url: string;
};

type HeaderProps = {
  username: string;
  tagline: string;
  isLive: boolean;
  socials: Social[];
};

const socialIcon: Record<Social["platform"], React.ReactNode> = {
  instagram: <FaInstagram size={22} />,
};

export default function Header({
  username,
  tagline,
  isLive,
  socials,
}: HeaderProps) {
  return (
    <header className="flex items-start justify-between py-6">
      <div>
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-xl">@{username}</span>
          {isLive && (
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
          )}
        </div>
        <p className="font-mono text-sm text-gray-500 mt-0.5">{tagline}</p>
      </div>
      <nav className="flex items-center gap-4 text-gray-700">
        {socials.map((s) => (
          <a
            key={s.platform}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.platform}
            className="hover:text-black transition-colors"
          >
            {socialIcon[s.platform]}
          </a>
        ))}
      </nav>
    </header>
  );
}

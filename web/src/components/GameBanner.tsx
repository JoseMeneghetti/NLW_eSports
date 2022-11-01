interface GamerBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GamerBanner({ bannerUrl, adsCount, title }: GamerBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute right-0 bottom-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">{adsCount} Anuncios</span>
      </div>
    </a>
  );
}

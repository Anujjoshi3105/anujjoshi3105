export default function QuoteSection() {
  return (
    <div className="relative max-w-3xl mx-auto aspect-video flex items-center justify-center">
      <span className="bg-theme/30 -z-10 blur-2xl rounded-full dark:blur-[150px] w-80 h-80 absolute animate-spinSlow" />
      <div className="text-center space-y-8">
        <div className="space-y-4 text-2xl sm:text-3xl md:text-4xl text-balance">
          <p>
            You don&apos;t learn to walk by&nbsp;
            <span className="text-theme font-semibold">following rules</span>
          </p>
          <p>
            You learn by&nbsp;
            <span className="text-theme font-semibold">
              doing and falling over
            </span>
          </p>
        </div>
        <p className="text-sm sm:text-base md:text-lg italic">
          ~ Richard Branson
        </p>
      </div>
    </div>
  );
}

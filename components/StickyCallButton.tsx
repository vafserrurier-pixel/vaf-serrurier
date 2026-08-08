import { business } from "@/lib/business";

export default function StickyCallButton() {
  return (
    <a
      href={business.phone.href}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden flex items-center gap-2 bg-urgent text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-black/20"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z"
          fill="currentColor"
        />
      </svg>
      Appeler maintenant
    </a>
  );
}

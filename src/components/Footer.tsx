export default function Footer() {
  return (
    <footer className="border-t border-app px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <span className="font-display text-base font-bold text-body">
          Facundo Bustamante
        </span>
        <span>© {new Date().getFullYear()} — All Rights Reserved.</span>
      </div>
    </footer>
  );
}

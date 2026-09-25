export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl items-center justify-center text-xs text-muted-3">
        <p className="flex items-center gap-2">
          <span className="hidden sm:inline">Press</span>
          <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted-2">
            ⌘K
          </kbd>
          <span className="hidden sm:inline">to navigate</span>
        </p>
      </div>
    </footer>
  );
}

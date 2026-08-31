export default function SkipLink() {
  const focusMainContent = () => {
    document.getElementById('main')?.focus();
  };

  return (
    <a className="skip-link" href="#main" onClick={focusMainContent}>
      Skip to main content
    </a>
  );
}

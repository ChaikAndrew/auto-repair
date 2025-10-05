// app/pl/layout.tsx
import "../globals.css";
import Topbar from "../components/Topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar locale="pl" />
      {children}
      <footer className="footer" role="contentinfo">
        <div className="container">© {new Date().getFullYear()} Dream Car</div>
      </footer>
    </>
  );
}
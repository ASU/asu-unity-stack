import Header from "./Header";
import Footer from "./Footer";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Page(props: LayoutProps) {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "139px" }} />
      <main style={{ paddingBottom: "96px" }}>
      <div id="skip-to-content" className="visually-hidden" />
        {props.children}
      </main>
      <Footer />
    </>
  );
}

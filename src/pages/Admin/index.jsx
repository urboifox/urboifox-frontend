import { useSearchParams } from "react-router-dom";
import AdminLayout from "../../components/layouts/AdminLayout";
import { adminPages } from "../../utils/constants";
import { AnimatePresence } from "framer-motion";
import { AnimatedWrapper } from "../../components";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Info from "./components/Info";

export default function Admin() {
  const [searchParams] = useSearchParams();
  const activePage = searchParams.get("page") || adminPages[0];

  const renderPage = (page) => {
    switch (page) {
      case "overview":
        return <Overview />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "information":
        return <Info />;
      default:
        return <Overview />;
    }
  };

  return (
    <AdminLayout>
      <div
        data-lenis-prevent
        className="pb-20 overflow-scroll h-screen pt-32 mx-auto cont px-60"
      >
        <AnimatePresence mode="wait">
          {adminPages.map((page, i) => {
            return (
              activePage === page && (
                <AnimatedWrapper key={i}>{renderPage(page)}</AnimatedWrapper>
              )
            );
          })}
        </AnimatePresence>
      </div>
    </AdminLayout>
  );
}

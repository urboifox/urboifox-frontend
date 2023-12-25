import AdminButton from "./components/AdminButton";
import { adminPages, noEditPages } from "../../utils/constants";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function AdminLayout({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");
  const location = useLocation();

  useEffect(() => {
    if (!currentPage && location.pathname === "/admin")
      setSearchParams((params) => {
        params.set("page", adminPages[0]);
        return params;
      });
  }, [currentPage, setSearchParams, location.pathname]);

  return (
    <div className="w-full h-screen cont mx-auto relative">
      <div className="absolute z-50 flex flex-col gap-5  left-4 md:left-10 top-1/2 -translate-y-1/2">
        {adminPages.map((page, i) => {
          return (
            <Link key={i} to={`?page=${page}`}>
              <AdminButton active={page === currentPage}>{page}</AdminButton>
            </Link>
          );
        })}
      </div>
      {children}
      <AnimatePresence>
        {!noEditPages.includes(currentPage) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
            className="absolute z-50 flex flex-col gap-5 right-4 md:right-10 top-32"
          >
            <AdminButton>Add new +</AdminButton>
            <AdminButton basic={true}>Save</AdminButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

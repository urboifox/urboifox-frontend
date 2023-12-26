import AdminButton from "./components/AdminButton";
import { adminPages, noEditPages } from "../../utils/constants";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../utils/axios";
import { clearPendingUpdates } from "../../redux/slices/pendingUpdatesSlice";
export default function AdminLayout({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");
  const location = useLocation();
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const toDelete = useSelector((state) => state.pendingUpdates.toDelete);
  const toUpdate = useSelector((state) => state.pendingUpdates.toUpdate);
  const modified = useSelector((state) => state.pendingUpdates.modified);

  const handleSave = async () => {
    setLoading(true);

    for (const item of toDelete) {
      try {
        await axios.delete(`/${item.type}/${item.id}`, {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        });
      } catch (err) {
        console.log(err);
      }
    }

    for (const item of toUpdate) {
      try {
        await axios.patch(`/${item.type}/${item.id}`, item.data, {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
    setLoading(false);
    dispatch(clearPendingUpdates());
  };

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");
    }

    if (!currentPage && location.pathname === "/admin") {
      setSearchParams((params) => {
        params.set("page", adminPages[0]);
        return params;
      });
    }

    return () => {};
  }, [
    cookies.token,
    navigate,
    currentPage,
    setSearchParams,
    location.pathname,
  ]);

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
            <AdminButton
              onClick={() => handleSave()}
              disabled={loading}
              basic={true}
              style={{
                pointerEvents: modified ? "auto" : "none",
                opacity: modified ? 1 : 0.2,
              }}
            >
              {loading ? "Saving..." : "Save"}
            </AdminButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

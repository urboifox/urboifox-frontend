import AdminTimeLine from "./AdminTimeLine";

export default function AdminInfo({ info }) {
  return (
    <>
      <AdminTimeLine key={info._id} tl={info} />
    </>
  );
}

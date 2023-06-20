import Sidebar from "../components/Sidebar";

export default function BlogLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <div className="flex flex-row gap-x-10">
        <Sidebar />
        <div className="min-h-full pt-40 pl-36 md:pl-72">
          {children}
        </div>
      </div>
    </section>
  );
}

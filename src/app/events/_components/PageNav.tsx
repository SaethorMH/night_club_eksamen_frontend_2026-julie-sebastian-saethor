import Link from "next/link";

const PageNav = ({ currentPage }: { currentPage: number }) => {
  return (
    <div className="flex place-self-center gap-2">
      <Link
        href={`/events?page=${currentPage - 1}`}
        className={`${currentPage > 1 ? "" : "hidden"}`}
      >
        Previous page
      </Link>
      <Link
        href={`/events?page=1`}
        className={`${currentPage == 1 ? "underline" : ""}`}
      >
        1
      </Link>
      <Link
        href={`/events?page=2`}
        className={`${currentPage == 2 ? "underline" : ""}`}
      >
        2
      </Link>
      <Link
        href={`/events?page=3`}
        className={`${currentPage == 3 ? "underline" : ""}`}
      >
        3
      </Link>

      <Link
        href={`/events?page=${currentPage + 1}`}
        className={`${currentPage < 3 ? "" : "hidden"}`}
      >
        Next page
      </Link>
    </div>
  );
};

export default PageNav;

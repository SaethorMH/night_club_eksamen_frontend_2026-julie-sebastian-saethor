import { Comment } from "./CommentsSection";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

type Props = {
  comment: Comment;
};
const EventComment = ({ comment }: Props) => {
  const d = new Date(comment.date);
  const date = d.getDate();
  const month = MONTHS[d.getMonth()];
  const year = d.getFullYear();
  const time = d.getHours();
  const minutes = convert(d.getMinutes());

  function convert(n: any) {
    n = String(n);
    if (n.length == 1) n = "0" + n;
    return n;
  }

  return (
    <article className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <h3>{comment.name} -</h3>

        <p className="text-(--pink)">
          {`Posted ${convert(date)} ${month} ${year}`}
        </p>
      </div>
      <p>{comment.content}</p>
    </article>
  );
};

export default EventComment;

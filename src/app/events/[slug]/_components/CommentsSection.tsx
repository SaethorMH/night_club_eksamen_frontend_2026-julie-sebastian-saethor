import { getComments } from "@/app/actions/actions";
import EventComment from "./EventComment";
import { number } from "zod";

export interface Comment {
  id: number;
  eventId: number;
  name: string;
  content: string;
  date: string;
}
type Props = {
  id: number;
};

const CommentsSection = async ({ id = 1 }: Props) => {
  const comments = await getComments(id);

  return (
    <section>
      <h2>{comments.length} Comments</h2>
      <div>
        {comments.map((c: Comment) => (
          <EventComment key={c.id} comment={c} />
        ))}
      </div>
    </section>
  );
};

export default CommentsSection;

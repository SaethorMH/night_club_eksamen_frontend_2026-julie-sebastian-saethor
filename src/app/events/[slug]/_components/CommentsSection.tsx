import { getComments } from "@/app/actions/actions";
import EventCard from "../../_components/EventCard";

const CommentsSection = (id: number = 1) => {
    const comments = getComments(id);

  return (
    <section>
      <h2>3 Comments</h2>
      <div>
        {comments.map((comment)=><EventCard comment={comment}))}
      </div>
    </section>
  );
};

export default CommentsSection;

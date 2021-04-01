import React from "react";
import useStyles from "./styles";
import moment from "moment";

function Message({ user: { name, _id }, body, createdAt, currentUser }) {
  const classes = useStyles();
  const current = currentUser._id === _id;

  const YTRegex = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  const youtubeLink = body.match(YTRegex);

  return (
    <div className={classes.root}>
      <div
        className={
          current ? classes.currentUserMessage : classes.otherUserMessage
        }
      >
        {youtubeLink ? (
          <>
            <h4 className={classes.messageHeader}>{current ? "Me" : name}</h4>
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${youtubeLink[1]}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <a href={body} target="_blank" rel="noreferrer">
              {body}
            </a>
          </>
        ) : (
          <>
            <h4 className={classes.messageHeader}>{current ? "Me" : name}</h4>
            <h3 className={classes.messageBody}>{body}</h3>
          </>
        )}

        <p className={classes.messageTime}>
          {moment(createdAt).format("hh:mm")}
        </p>
      </div>
    </div>
  );
}

export default Message;

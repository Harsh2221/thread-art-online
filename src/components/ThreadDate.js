function ThreadDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { month: "2-digit" });
  const year = props.date.getFullYear();
  const time = props.date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <p class="timestamp">
      {month} {year} {day}, {time}
    </p>
  );
}

export default ThreadDate;

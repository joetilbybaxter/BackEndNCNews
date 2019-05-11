exports.convertTimestampToDate = ({ created_at, ...otherProperties }) => {
  return { created_at: new Date(created_at), ...otherProperties };
};

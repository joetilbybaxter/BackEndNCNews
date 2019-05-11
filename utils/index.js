const convertTimestampToDate = ({ created_at, ...otherProperties }) => {
  if (!created_at) return { ...otherProperties };
  return { created_at: new Date(created_at), ...otherProperties };
};

const createRef = (arr, key, value) => {
  return arr.reduce((ref, element) => {
    ref[element[key]] = element[value];
    return ref;
  }, {});
};

const formatComments = (comments, idLookup) => {
  return comments.map(({ created_by, belongs_to, ...restOfComment }) => {
    belongs_to = idLookup[belongs_to];
    restOfComment = convertTimestampToDate(restOfComment);
    return { belongs_to, author: created_by, ...restOfComment };
  });
};

module.exports = { convertTimestampToDate, createRef, formatComments };

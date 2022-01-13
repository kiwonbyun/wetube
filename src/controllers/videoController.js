export const trending = (req, res) => res.send("trending Videos");
export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.send("Edit");
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deletevideo = (req, res) => {
  console.log(req.params);
  return res.send("delete Video");
};

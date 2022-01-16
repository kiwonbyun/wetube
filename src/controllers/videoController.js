let videos = [
  {
    title: "First video,xman",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 2,
    id: 1,
  },
  {
    title: "second video,iron man",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "third video,thor",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "home", videos });
};
export const watch = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `watching ${video.title}`, video });
};
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deletevideo = (req, res) => {
  console.log(req.params);
  return res.send("delete Video");
};

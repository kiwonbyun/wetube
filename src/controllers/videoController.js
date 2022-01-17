import Video from "../models/video";

export const home = (req, res) => {
  Video.find({}, (error, videos) => {
    return res.render("home", { pageTitle: "home", videos });
  });
};
export const watch = (req, res) => {
  const id = req.params.id;
  return res.render("watch", { pageTitle: `watching:` });
};
export const getEdit = (req, res) => {
  const id = req.params.id;
  return res.render("edit", { pageTitle: `Editing:` });
};
export const postEdit = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: `uploading` });
};
export const postUpload = (req, res) => {
  // here we will add a video to the video array.
  const videoTitle = req.body.videoTitle;
  return res.redirect("/");
};

module.exports.dashboard = async function (req, res) {
  try {
    if (req.isAuthenticated()) {
      return res.render("dashboard", {
        title: "Dashboard",});
    } else {
      return res.redirect("/");
    }
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};

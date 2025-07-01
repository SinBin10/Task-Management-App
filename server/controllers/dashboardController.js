const dashboardController = (req, res) => {
  try {
    console.log("inside dashboard controller.");
    res.json({
      msg: "this is the dashboard homepage coming from backend to show your token is valid",
    });
  } catch (error) {
    res.json({ msg: "something went wrong --> dashboardController" });
  }
};

module.exports = { dashboardController };

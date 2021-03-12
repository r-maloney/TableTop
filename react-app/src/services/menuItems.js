const Documenu = require("documenu");
Documenu.configure(process.env.DOCUMENU_API_KEY);

const params = {
  lat: "40.68919",
  distance: "100",
  lon: "-73.992378",
  page: "1",
};

const seedMenuItems = async () => {
  let result = await Documenu.MenuItems.searchGeo(params);
  console.log(result);
};

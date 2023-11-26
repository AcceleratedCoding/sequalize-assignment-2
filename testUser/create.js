const { User } = require("../models");

async function createRecords() {
    const user = await User.create({
        display_name: "Goku",
        email: "goku@example.com" ,
        username: "goku",
        bio: "Kamehameha! "
    });
}
createRecords();
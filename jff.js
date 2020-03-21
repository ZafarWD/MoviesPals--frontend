const axios = require("axios");

async function yo() {
    const res = await axios.get("http://localhost:6969/movies");

    console.log(res.data);
}

yo();
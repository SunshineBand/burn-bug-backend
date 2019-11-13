const app = require('./src/app');
const PORT = process.env.PORT || process.env.DEV_PORT || 5001;

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
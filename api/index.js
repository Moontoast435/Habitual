const app = require('./server');

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`🚀 The Habitual server has blasted off on port ${port} 🚀`));
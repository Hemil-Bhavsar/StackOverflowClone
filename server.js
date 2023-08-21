console.log(process.env);

const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
require('./utils/import-dev-data');
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
process.on('SIGTERM',()=>{
  console.log('SIGTERM received');
  server.close(()=>{
    console.log('💥💥💥Process terminated')
  })
})
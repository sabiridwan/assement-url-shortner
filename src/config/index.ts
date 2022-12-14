export default () => ({
  port: parseInt(process.env.port, 10) || 4001,
  database: {
    host: process.env.mongo_db_uri,
  },
});

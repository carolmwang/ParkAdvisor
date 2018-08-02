module.exports = {
    host: process.env.DB_HOST || "local-host",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_database || "np_db",
};
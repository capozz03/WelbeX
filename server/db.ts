import pg from "pg";

const Pool = pg.Pool;
const pool = new Pool({
  user: "postgres",
  password: "admin",
  host: "localhost",
  port: 5432,
  database: "postgres_welbex",
});

export { pool };

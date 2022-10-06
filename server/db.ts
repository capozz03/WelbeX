import pg from "pg";

const Pool = pg.Pool;
const pool = new Pool({
  user: `${process.env.USER}`,
  password: `${process.env.PASSWORD}`,
  host: `${process.env.HOST}`,
  port: 5432,
  database: `${process.env.DATABASE_URL}`,
});

export { pool };

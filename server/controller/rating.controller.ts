import express from "express";
import { pool } from "../db";

class RatingController {
  static async createRating(req: express.Request, res: express.Response) {
    const { date, name, count, distance } = req.body;
    const newRating = await pool.query(
      "INSERT INTO rating (date, name, count, distance) values ($1, $2, $3, $4) RETURNING *",
      [date, name, count, distance]
    );
    res.json(newRating.rows[0]);
  }
  static async getRatings(req: express.Request, res: express.Response) {
    const { limit, offset } = req.query;
    if (limit && offset) {
      const rating = await pool.query(
        `SELECT * FROM rating Order by id LIMIT ${limit} OFFSET ${offset}`
      );
      res.json(rating.rows);
    } else {
      const rating = await pool.query("SELECT * FROM rating *");
      res.json(rating.rows);
    }
  }
  static async updateRating(req: express.Request, res: express.Response) {
    const { id, date, name, count, distance } = req.body;
    const rating = await pool.query(
      "UPDATE rating set date = $1, name = $2, count = $3, distance = $4 where id = $5 RETURNING *",
      [date, name, count, distance, id]
    );
    res.json(rating.rows[0]);
  }

  static async getFilterRating(req: express.Request, res: express.Response) {
    const { field, condition, value } = req.params;
    const { limit, offset } = req.query;
    let params = `${field} ${condition} '${value}'`;
    if (condition === "like") {
      params = `${field} ${condition} '${value}%'`;
    }
    if (limit && offset) {
      const rating = await pool.query(`SELECT * FROM rating WHERE ${params} Order by id LIMIT ${limit} OFFSET ${offset}`);
      res.json(rating.rows);
    } else {
      const rating = await pool.query(`SELECT * FROM rating WHERE ${params}`);
      res.json(rating.rows);
    }
  }
}

export { RatingController };

import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const query=`INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *`;
    const values=[username, password, name];

    try {
        const result = await client.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const query = `SELECT * FROM users WHERE id = $1`;
    const values = [userId];
    try {
        const result = await client.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.log("Error getting user:", error);
        throw error;
    }
}

import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const query = `
        INSERT INTO todos (user_id, title, description, done)
        VALUES ($1, $2, $3, false)
        RETURNING *
    `;
    const values = [userId, title, description];

    try {
        const result = await client.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error creating todo:", error);
        throw error;
    }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const query = `
        UPDATE todos
        SET done = true
        WHERE id = $1
        RETURNING *
    `;
    const values = [todoId];

    try {
        const result = await client.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error updating todo:", error);
        throw error;
    }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const query = `
        SELECT * FROM todos
        WHERE user_id = $1
    `;
    const values = [userId];

    try {
        const result = await client.query(query, values);
        return result.rows;
    } catch (error) {
        console.error("Error getting todos:", error);
        throw error;
    }
}
import { Hono } from "hono";


export const  expensesRoute = new Hono()
.get("/", (c) => {
    return c.json ({expanses: []})
})
.post ("/", (c) =>{
    return c.json({});

})
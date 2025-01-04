import createApp from "./app";

const app = createApp();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`🚀 Server started on port http://localhost:${port}`);
});
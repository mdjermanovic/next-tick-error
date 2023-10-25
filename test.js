process.on("uncaughtException", () => {
    console.log("uncaughtException");
});

process.nextTick(() => {
    const error = new Error();
    error.stack = "test_error_stack";
    throw error;
});
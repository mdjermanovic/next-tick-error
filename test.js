process.on("uncaughtException", () => {
    console.log("uncaughtException");
});

process.nextTick(() => {
    throw new Error("My error.");
});
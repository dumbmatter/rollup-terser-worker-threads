import { Worker } from "node:worker_threads";

const promise = new Promise(resolve => {
    const worker = new Worker(
        new URL("./make-bundle-worker.js", import.meta.url),
    );

    worker.on("message", () => {
        resolve();
    });
});

await promise;

console.log("Done!");

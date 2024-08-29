#!/usr/bin/env node
import Tinypool from 'tinypool';

const processCount = 50;

const pool = new Tinypool({
  filename: new URL('./worker.js', import.meta.url).href,
  isolateWorkers: true,
  runtime: 'child_process',
});

console.log(`forking ${processCount} processes...`);
console.time(`finished`);

const resultPromises = [];

for (let i = 0; i < processCount; i++) {
  resultPromises.push(pool.run({
    message: `worker ${i + 1} started`,
  }));
}

await Promise.allSettled(resultPromises);

console.timeEnd(`finished`);

# Jamf Protect + Node.js Fork Performance Benchmark

This project contains a script that measures how long it takes [tinypool](https://github.com/tinylibs/tinypool) to fork 50 Node.js worker processes that each log a message to the console.

## Usage

1. Either clone or [download](https://github.com/rgrove/jamf-node-fork-performance/archive/refs/heads/main.zip) this repository to your local machine.

2. Ensure that you have a recent LTS version of [Node.js](https://nodejs.org/) installed. This project was tested with Node.js 20.17.0.

3. In the project directory, run `npm install` to install dependencies.

4. Run `npm start` to run the benchmark.

## Output

The script will print a message as each worker process starts. After all processes have started, the script will report the total time taken to fork all worker processes.

On a 2021 MacBook Pro with an M1 Pro processor, Node.js 20.17.0 typically finishes the benchmark in ~250 milliseconds when Jamf Protect is not enabled. With Jamf Protect enabled, the benchmark finishes in ~30 seconds.

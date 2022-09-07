const core = require("@actions/core");
const { Octokit } = require("octokit");

const octokit = new Octokit({
  auth: process.env.ACCESS_TOKEN,
});

async function run() {
  try {
    const { data: user } = await octokit.request("GET /user");
    console.log(`authenticated as ${user.login}`);
    const { status: status, data: res } = await octokit.request(
      "POST /repos/{owner}/{repo}/merge-upstream",
      {
        owner: core.getInput('owner'),
        repo: core.getInput('repo'),
        branch: core.getInput('branch'),
      }
    );
    console.log("Status: " + status);
    console.log("Message: " + res.message);
  } catch (error) {
    core.setFailed(error.message)
  }
}

run();

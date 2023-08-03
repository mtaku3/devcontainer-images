const { Octokit } = require("@octokit/rest");
const { createActionAuth } = require("@octokit/auth-action");

let instance;
function getInstance() {
    if (instance) {
        return instance;
    }

    if ("PAT" in process.env) {
        instance = new Octokit({
            auth: process.env.PAT
        });
    } else if ("GITHUB_ACTION" in process.env) {
        instance = new Octokit({
            authStrategy: createActionAuth
        });
    } else {
        throw new Error("No PAT (stands for Personal Access Token) or GITHUB_TOKEN found in environment. It is required for GitHub API authentication.");
    }

    return instance;
}

module.exports = {
    getInstance
};
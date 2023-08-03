const { isAxiosError } = require('axios');

const axios = require('axios').default;

let instance;
function getInstance() {
    if (instance) {
        return instance;
    }

    let token;
    if ("PAT" in process.env) {
        token = process.env.PAT;
    } else if ("GITHUB_TOKEN" in process.env) {
        token = process.env.GITHUB_TOKEN;
    } else {
        throw new Error("No PAT (stands for Personal Access Token) or GITHUB_TOKEN found in environment. It is required for GHCR Docker API authentication.");
    }

    const base64EncodedPAT = Buffer.from(token).toString('base64');
    instance = axios.create({
        baseURL: 'https://ghcr.io/v2',
        headers: {
            Authorization: `Bearer ${base64EncodedPAT}`
        }
    });

    return instance;
}

module.exports = {
    getInstance,
    isGHCRError: isAxiosError
};
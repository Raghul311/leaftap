import dotenv from 'dotenv';
import { Octokit } from '@octokit/rest';

dotenv.config();

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.error('GITHUB_TOKEN is not set. Exiting.');
  process.exit(1);
}

const owner = process.env.REPO_OWNER || 'Raghul311';
const repo = process.env.REPO_NAME || 'leaftap';
const head = process.env.PR_HEAD || 'feat/add-create-lead-test-issue-3';
const base = process.env.PR_BASE || 'main';
const title = process.env.PR_TITLE || '[Test] Verify Create Lead Functionality - Fixes #3';
const body = process.env.PR_BODY || 'Adds an automated Playwright test that verifies the company name is displayed after creating a lead. Covers acceptance criteria: login, navigate to CRM/SFA, create lead, and verify company name. Related issue: https://github.com/Raghul311/leaftap/issues/3';
const labels = (process.env.PR_LABELS || 'test,automation').split(',').map(s => s.trim()).filter(Boolean);

async function run() {
  const octokit = new Octokit({ auth: token });

  try {
    const { data } = await octokit.pulls.create({
      owner,
      repo,
      title,
      head,
      base,
      body,
    });

    console.log('Pull request created:', data.html_url);

    if (labels.length > 0) {
      try {
        await octokit.issues.addLabels({
          owner,
          repo,
          issue_number: data.number,
          labels,
        });
        console.log('Labels added:', labels.join(', '));
      } catch (labelErr) {
        console.warn('Failed to add labels:', labelErr);
      }
    }
  } catch (err: any) {
    console.error('Failed to create PR:', err.message || err);
    process.exit(1);
  }
}

run();

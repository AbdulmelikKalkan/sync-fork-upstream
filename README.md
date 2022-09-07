# Sync Fork Upstream
![Version](https://img.shields.io/github/v/release/AbdulmelikKalkan/sync-fork-upstream)

Github action to sync your forked repo with the upstream repository.
This action uses octokit and Github API to automatically update branch

## Example Workflow

You will have to provide a [personal access token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) for a user. Make sure the token has 'public_repo' permissions and store the token inside of the [repository secrets](https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository).

```yml
name: Sync Fork Upstream

on:
  schedule:
    - cron: '0 8 * * *' # every day 8am
  workflow_dispatch: # on button click

jobs:
  sync:

    runs-on: ubuntu-latest

    steps:
      - uses: AbdulmelikKalkan/sync-fork-upstream@v1.3
        env:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        with:
          owner: repo_owner
          repo: repo_name
          branch: branch_name
```

## Parameters

|   name        |   description                                 |
|---            |---                                            |
|   owner       |   The account owner of the repository.        |
|   repo        |   The name of the repository.                 |
|   branch      |   The name of the branch which should be updated to match upstream.                   |

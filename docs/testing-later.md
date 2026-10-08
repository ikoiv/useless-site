# Tests later

The plan is to build something here, then write the tests myself in the other repos.

Run this site with `npm start`. It uses port 4174; the old task demo uses 4173.

For browser tests, point Playwright at `http://127.0.0.1:4174`. The config still starts the task demo, so that needs changing too. There are no test cases or page objects supplied.

The API repo can wait until the site actually has an API. Right now `/health` only says the local server is running.

The strategy repo is a place for my own planning notes. The ledger is a separate practice app; I don't need to add banking features to this site to use it.

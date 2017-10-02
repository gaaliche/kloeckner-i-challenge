kloeckner-i QA Challenge
========================
# Le Challenge
Instructions
We all know and love our favourite task management tool: Trello.com
Please create a test account on https://trello.com and a board. Go to this board, your now on "board" level. 

1. Please make a spreadsheet with Prio 1,2,3 functionalities for the "board" level functionality of trello (list does not need to be complete, use your own judgement, e.g. 5 to 10 points each)
2. Detail out 4 test cases for the functionalities (should include two of the Prio 1 functionalities)
3. Build a testing script in a language/framework of your choice for two of these test cases
4. Provide the scripts as a repository bundle, including a documentation on how to set them up locally and execute them
5. Provide test case documentation and describe your process (as a list of steps) shortly

# Installation
- git clone git @https://github.com/gaaliche/kloeckner-i-challenge.git
- `cd kloeckner-i-challenge`
- install node v4.2.6
-`source env.sh`
- `npm install`

# Start the e2e tests
- In file "wdio.conf.js" select the desired browser : `browserName: 'firefox'` or `browserName: 'chrome'`
- `npm run e2e`.

# Note
- Used language/framework : JS/WebdriverIO-Jasmine

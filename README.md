Agent sample app 
================
Agent simulator app that has the ability to request it's external IP address and send it to the visitor

Prerequisites
=============
- Create LiveEngage site
- Username and password

Installation
============
- Run npm install 

Getting Started
===============
1. Run npm start
2. Go to [visitor test page](https://livepersoninc.github.io/visitor-page/?siteid=SiteId), enter your site ID in the url and refresh the page 
3. Click to start chat
4. Send the message "What is the server IP?"
5. Wait for the agent response
6. The agent should send a message representing it's external IP address

Tests
===============
1. Run npm test (only 1 unit test)

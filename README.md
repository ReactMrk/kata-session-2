Create and push a new branch using **git checkout -b kata-2-your-name** and **git push -u origin kata-2-your-name**

# **Client management with react and hooks**

The idea of our company is to create a large application to manage clients. Therefore, Client management, from the first session, has been redeveloped using React due to its scalability.

Use correct node version: **nvm use**

Install dependencies: **npm install**

Run app: **npm run dev**

**Tips:** commented code is the skeleton to complete the exercises.

**Info:** it's not a problem that clients are lost when website is reloaded because in a future an API will be used to get them.

**Exercise 1.**

After some time on production, a new requirement has been requested. When agent adds a new client and the list of clients is large, there is no feedback, so agents are not sure if the client has been added correclty until they scroll down the entire list.

To do this improvement, principal engineer suggested you to create a component using useEffect that displays an alert on the top of the list when a new client is added. The alert should be displayed for 2 seconds.

**Use src/Alert.jsx file**

**Exercise 2.**

Principal engineer saids that this hook maybe needed for other components. Once this effect is working, could you refactor it to be a custom hook?

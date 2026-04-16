const http = require("node:http");
const personalInfo = {
  name: "Omar Ahmed",
  fieldOfStudy: "Computer Science",
  message: "You can do it",
  link: "/api",
};
const apiInfoPage = {
  name: "Shams",
  field: "Computer Science",
  goal: "Become a backend developer",
  message: "Keep going, you're doing great ",
};

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "content-type": "text/html" });
    response.end(`Personal Info Page <br><br>
    Name: ${personalInfo.name} <br>
    Field of Study: ${personalInfo.fieldOfStudy}<br>
    Short Motivational Message: ${personalInfo.message}<br>
    API Route Link: <a href ="/api">API Data</a>`);
  } else if (request.url === "/api") {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(apiInfoPage));
  } else {
    response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>404 Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("listening");
});

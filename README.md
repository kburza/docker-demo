# docker-demo

In order to run the Node-app on local machine port 3200:

Run:
docker build -t node-app:1.0 .
docker run -d -p 3200:3200 node-app:1.0

The access at:
http://localhost:3200/

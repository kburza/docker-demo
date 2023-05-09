# docker-demo

In order to run the Node-app on local machine port 8000:

Run:
docker build -t node-app:1.0 .
docker run -d -p 8000:8000 node-app:1.0

The access at:
http://localhost:8000/

Final result at port 8000:

![Alt text](/result.png "Result")

Image credit: https://gist.github.com/dhrp/5733652

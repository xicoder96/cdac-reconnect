# Proof Of Concepts(POC)

## 1. POC For Mocha with Chai

- Use `npm install` to install all the package and dependencies.
- `./test` contains all the unit test files.
- `server.js` is the server with the podcast.
- `server2.js` is the server with the podcast, which returns our project style response.

```JSON
{
    "status":true,
    "message":"Fetched details successfully",
    "data":[]
}
```

## 2 Docker

## Building your image

- Go to the folder which contains the `Dockerfile` and run the following command to build the Docker image. The `-t` flag lets you tag your image so it's easier to find later using the docker images command:

```CMD
docker build -t <your username>/node-web-app .
```

- Your image will now be listed by Docker:

```SHELL
docker images

# Example
REPOSITORY                      TAG        ID              CREATED
node                            10         1934b0b038d1    5 days ago
<your username>/node-web-app    latest     d64d3505b0d2    1 minute ago
```

## Run the image

- Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container. Run the image you previously built:

```SHELL
docker run -p 49160:8080 -d <your username>/node-web-app
```

- Print your output

```SHELL
# Get container ID
 docker ps

# Print app output
 docker logs <container id>

# Example
Running on http://localhost:8080
```

- If you need to go inside the container you can use the `exec` command:

```SHELL
docker exec -it <container id> /bin/bash
```

## Test

- Get The port of the docker images mapped:

```SHELL
docker ps
```

- Now you can call your app using curl (install if needed via: sudo apt-get install curl):

```SHELL
curl -i localhost:49160
```



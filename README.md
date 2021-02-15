NustJS Learning
======

NOTE
----
Proof of concept in NustJS framework.

Application flow pattern:
---------------------
https://github.com/suraboy/nuxtjs-learning

Run the docker for development:
---------------------

You can start the application and run the containers in the background, use following command inside project root:

```bash
docker-compose up -d
```

Installing Dependencies via Composer
------------------------------------
Run the composer installer:

```bash
docker exec -it nuxtjs-app npm install
```
or
```bash
docker exec -it nuxtjs-app npm update
```

Running Logging 
------------------------------------
```bash
docker logs -f nuxtjs-app
```

Running Application
------------------------------------
Open the browser
```bash
http://localhost:6319
```

# Company Turnover Graph App

For the time being the app works as the Comarch ERP Optima csv format of reports and the parsed and converted reports data is the data source.

![screencast](./assets/screencast.gif)

## Local deployment via docker compose

`docker-compose up --build`

## Run tests in a container

`docker-compose -f docker-compose.yml -f docker-compose.test.yml up --build --exit-code-from e2e`

## K8s deployment using local registry - old version - to be updated

```bash
minikube start
minikube addons enable registry

docker run --rm -it --network=host alpine ash -c "apk add socat && socat TCP-LISTEN:5000,reuseaddr,fork TCP:$(minikube ip):5000"
```

in another terminal window:

```
docker build . -t frontend -f ./docker/frontend/Dockerfile
docker build . -t backend -f ./docker/backend/Dockerfile
docker build . -t csv-parser -f ./docker/csv-parser/Dockerfile

docker tag frontend localhost:5000/frontend
docker tag backend localhost:5000/backend
docker tag csv-parser localhost:5000/csv-parser

docker push localhost:5000/frontend
docker push localhost:5000/backend
docker push localhost:5000/csv-parser

kubectl apply -f k8s/kompose/frontend.yaml,k8s/kompose/backend.yaml,k8s/kompose/csv-parser.yaml

kubectl get all

minikube service frontend
```

and that should open the browser with the app running

to debug within cluster

```bash
kubectl describe pod <pod-id>
```

Useful links:
https://minikube.sigs.k8s.io/docs/handbook/registry/
https://stackoverflow.com/questions/52698748/connection-refused-on-pushing-a-docker-image

cleanup

```bash
kubectl delete --all pods,services,deployments,replicasets
```

## Issues solved for future reference

- using d3 library
- data serving and consuming via graphql

## 2do

- strapi to ts
- e2e tests
- k8s
- deployment
- infrastruture provisioning
- jenkins
- improve styles
- strapi cms plugin to upload other files as the data source

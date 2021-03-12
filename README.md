# Company Turnover Graph App

![screencast](./assets/screencast.gif)

## Local deployment via docker compose

`docker-compose up --build`

## K8s deployment using local registry

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
```

and visit `http://localhost:3000`

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

- own graphql- and python-based BE
- refactor `csv-parser` to OO-structure
- env file based docker-compose
- improve frontend UX: hints to user how to zoom, change cursor
- animate d3 graphs
- refactor frontend to achieve more modular structure
- update frontend unit and integration tests

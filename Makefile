.PHONY: docker-stop
docker-stop:
	docker-compose down

.PHONY: docker-run
dokcer-run:
	docker-compose up -d
	
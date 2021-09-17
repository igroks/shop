.PHONY: setup
setup: build
	npm install

.PHONY: stop
stop:
	docker-compose down

.PHONY: run
run:
	docker-compose up -d
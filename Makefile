.PHONY: docker-stop
docker-stop:
	@docker-compose down

.PHONY: docker-run
docker-run:
	@docker-compose up -d
	
.PHONY: db-migrate
db-migrate:
	@docker-compose run --rm web npx sequelize db:migrate
	@docker-compose run --rm web npx sequelize-cli db:seed:all

.PHONY: docker-stop
docker-stop:
	@docker-compose down

.PHONY: docker-run
docker-run:
	@docker-compose up -d
	
.PHONY: docker-set-database
docker-set-database:
	@docker-compose run --rm web npx sequelize db:migrate
	@docker-compose run --rm web npx sequelize-cli db:seed:all

.PHONY: docker-update-migrations
docker-update-migrations:
	@docker-compose run --rm web npx sequelize db:migrate:undo:all
	@docker-compose run --rm web npx sequelize db:migrate

.PHONY: docker-update-seeds
docker-update-seeds:
	@docker-compose run --rm web npx sequelize db:seed:undo:all
	@docker-compose run --rm web npx sequelize-cli db:seed:all

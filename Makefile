.PHONY: build
build:
	docker build -f Dockerfile -t api-shop .

.PHONY: run
run:
	docker run -p 3000:3000 -v /home/igor/Documentos/My_Projects/PW2:/usr/app -d api-shop
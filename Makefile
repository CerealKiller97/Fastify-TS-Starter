.PHONY: cleanup
cleanup:
	rm -rf dist/
	rm -rf .nyc_output

.PHONY: generateKey
generateKey:
	./genKey

.PHONY: setup
setup:
	cp .env.example .env
	yarn

.PHONY: test
test:
	yarn test
	make cleanup

.PHONY: dev
dev:
	yarn dev

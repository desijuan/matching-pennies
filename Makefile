.DEFAULT_GOAL := test

setup:
	npm install

compile:
	$(MAKE) -C contract compile

test:
	$(MAKE) -C contract test

clean:
	git clean -dxf

.PHONY: setup compile test clean

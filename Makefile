SOURCE_FILES = $(filter-out $(wildcard *.es6.js **/*.es6.js), $(wildcard *.js **/*.js))
DIST_FILES = $(patsubst %.js, %.es6.js, $(SOURCE_FILES) )

all: $(DIST_FILES)
.phony: list clean

%.es6.js: %.js
	@echo "Building $@ with babel from $<"
	npm run babel -- $< --out-file $@

list:
	@echo $(SOURCE_FILES)
	@echo $(DIST_FILES)

clean:
	rm -r .nyc_output
	rm -r coverage
	rm **/*.es6.js
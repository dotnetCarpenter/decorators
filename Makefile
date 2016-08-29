SOURCE_FILES = $(filter-out $(wildcard *.es6.js **/*.es6.js), $(wildcard *.js **/*.js))
DIST_FILES = $(patsubst %.js, %.es6.js, $(SOURCE_FILES) )

all: $(DIST_FILES)
.phony: list

%.es6.js: %.js
	@echo "Building $@ with babel from $<"
	npm run babel -- $< --out-file $@

list:
	@echo $(SOURCE_FILES)
	@echo $(DIST_FILES)
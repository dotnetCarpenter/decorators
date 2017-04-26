SOURCE_FILES = $(filter-out $(wildcard *.es5.js **/*.es5.js), $(wildcard *.js **/*.js))
DIST_FILES = $(patsubst %.js, %.es5.js, $(SOURCE_FILES) )

all: $(DIST_FILES)
.phony: list clean

%.es5.js: %.js
	@echo "Building $@ with babel from $<"
	npm run babel -- --source-maps inline $< --out-file $@

list:
	@echo $(SOURCE_FILES)
	@echo $(DIST_FILES)

clean:
	rm -f **/*.es5.js
	rm -f **/*.es5.js.map
	rm -rf coverage
	rm -rf .nyc_output

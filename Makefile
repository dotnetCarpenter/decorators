SOURCE_FILES = $(filter-out $(wildcard *.es5.js **/*.es5.js), $(wildcard *.js **/*.js))
DIST_FILES = $(patsubst %.js, %.es5.js, $(SOURCE_FILES) )

all: $(DIST_FILES)
.phony: list clean

%.es5.js: %.js
	@echo "Building $@ with babel from $<"
	npm run babel -- $< --out-file $@

list:
	@echo $(SOURCE_FILES)
	@echo $(DIST_FILES)

clean:
	rm **/*.es5.js
	rm -r coverage
	rm -r .nyc_output

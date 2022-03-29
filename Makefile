SOURCE_FILES = $(filter-out $(wildcard *.cjs **/*.cjs), $(wildcard *.mjs **/*.mjs))
DIST_FILES = $(patsubst %.mjs, %.cjs, $(SOURCE_FILES) )

all: $(DIST_FILES)
.phony: list clean

%.cjs: %.mjs
	@echo "Building $@ with babel from $<"
	npm run babel -- $< --out-file $@

list:
	@echo $(SOURCE_FILES)
	@echo $(DIST_FILES)

clean:
	rm -f **/*.cjs
	rm -rf coverage
	rm -rf .nyc_output

SOURCE_FILES = $(filter-out $(wildcard *.cjs **/*.cjs), $(wildcard *.js **/*.js))
DIST_FILES = $(patsubst %.js, %.cjs, $(SOURCE_FILES) )

all: $(DIST_FILES)
.phony: list clean

%.cjs: %.js
	@echo "Building $@ with babel from $<"
	npm run babel -- --source-maps inline $< --out-file $@

list:
	@echo $(SOURCE_FILES)
	@echo $(DIST_FILES)

clean:
	rm -f **/*.cjs
	rm -f **/*.cjs.map
	rm -rf coverage
	rm -rf .nyc_output

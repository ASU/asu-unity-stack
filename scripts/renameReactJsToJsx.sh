# #!/bin/bash
printf "Please select package:\n"
select d in packages/*/; do test -n "$d" && break; echo ">>> Invalid Selection"; done
selected_src="$(pwd)/${d}src"

echo $selected_src

# finds all *.js files that have either `</` or `/>` tags in them and renames them to *.jsx
find $selected_src -type f -name '*.js' -not -name '*.jsx' -not -name '*.ejs' -exec bash -c 'grep -l -E "</|/>" "$0"' {} \; -exec bash -c 'git mv "$0" "${0%.js}.jsx"' {} \;

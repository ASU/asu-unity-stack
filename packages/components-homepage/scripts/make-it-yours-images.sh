#!/usr/bin/env bash
# Regenerates src/img/make-it-yours/ from the approved photos (default source: the repo's .intake/ folder).
# Needs cwebp and webpinfo (libwebp 1.x, reads WebP): brew install webp
# Run: yarn workspace @asu/components-homepage images:make-it-yours   (or: bash scripts/make-it-yours-images.sh <source-dir>)
set -euo pipefail
SRC="${1:-../../.intake}"
OUT="src/img/make-it-yours"
for tool in cwebp webpinfo; do command -v "$tool" >/dev/null 2>&1 || { echo "$tool not found: brew install webp" >&2; exit 1; }; done
mkdir -p "$OUT"

# Each slug maps to the .intake/ file of the same name (design doc D9: names were fixed at the source).
SLUGS=(
  design-your-degree
  learn-your-way
  find-your-people
  build-your-experience
  explore-costs-and-aid
)

STAGE_H=865 # desktop stage height ($hp-myours-h): the photo covers it, so no variant may be shorter

for slug in "${SLUGS[@]}"; do
  src="$SRC/$slug.webp"
  w=$(webpinfo -summary "$src" | awk '/Width:/ { print $2; exit }')
  h=$(webpinfo -summary "$src" | awk '/Height:/ { print $2; exit }')
  # Narrowest width that is still STAGE_H tall (rounded up): wide photos get a wider "1280" tier.
  min_w=$(( (STAGE_H * w + h - 1) / h ))
  cp "$src" "$OUT/$slug.webp"                                    # the original width (3932/3934)
  for tier in 1280 1920 2560; do
    width=$(( tier > min_w ? tier : min_w ))
    cwebp -quiet -q 80 -m 6 -resize "$width" 0 "$src" -o "$OUT/$slug-$tier.webp"
    echo "$slug-$tier.webp: ${width}w (the srcset descriptor in make-it-yours-markup.js must match)"
  done
  cp "$SRC/$slug-mobile.webp" "$OUT/$slug-mobile.webp"          # 900x650
done
ls -l "$OUT"

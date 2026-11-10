#!/usr/bin/env bash
# Regenerates src/img/make-it-yours/ from the approved photos (default source: the repo's .intake/ folder).
# Needs cwebp (libwebp 1.x, reads WebP): brew install webp
# Run: yarn workspace @asu/components-homepage images:make-it-yours   (or: bash scripts/make-it-yours-images.sh <source-dir>)
set -euo pipefail
SRC="${1:-../../.intake}"
OUT="src/img/make-it-yours"
command -v cwebp >/dev/null 2>&1 || { echo "cwebp not found: brew install webp" >&2; exit 1; }
mkdir -p "$OUT"

# Each slug maps to the .intake/ file of the same name (design doc D9: names were fixed at the source).
SLUGS=(
  design-your-degree
  learn-your-way
  find-your-people
  build-your-experience
  explore-costs-and-aid
)

for slug in "${SLUGS[@]}"; do
  cp "$SRC/$slug.webp" "$OUT/$slug.webp"                        # the original width (3932/3934)
  for width in 1280 1920 2560; do
    cwebp -quiet -q 80 -m 6 -resize "$width" 0 "$SRC/$slug.webp" -o "$OUT/$slug-$width.webp"
  done
  cp "$SRC/$slug-mobile.webp" "$OUT/$slug-mobile.webp"          # 900x650
done
ls -l "$OUT"

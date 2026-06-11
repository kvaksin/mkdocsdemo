#!/bin/bash
set -e

# Install dependencies
uv sync

# Build MkDocs site
uv run mkdocs build --clean --site-dir public

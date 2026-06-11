#!/bin/bash
set -e
uv sync
uv run mkdocs build -d public --clean

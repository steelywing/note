---
date: 2024-02-16
tags: [Python]
---

# Python Package Manager

Python 的 Deployment 真的很複雜（Python version, Package dependence, Package install method 等問題），做成越來越多的工具想解決這個問題，Rye 的 [Doc](https://rye-up.com/philosophy/) 有詳細說明 Python 的 Package Management / Version / Resolver 問題

<!--truncate-->

Show which python is using

```sh
python -c "import sys; print(sys.prefix)"
```

## PDM

[PDM](https://pdm-project.org/)

- Personal recommended
- Support `pnpm` liked cache link
- Support standard `pyproject.toml`
- PDM use system python

Enable `pnpm` liked cache

```sh
pdm config install.cache on
```

## UV

[UV](https://github.com/astral-sh/uv)

- Extremely fast, 10~100x faster than `pip`
- Manage Python versions
- Not compatible with some package
- Support standard `pyproject.toml`
- Written in Rust

## Rye

[Rye](https://rye-up.com/)

- Built by Rye (The creator of the Flask)
- Manage Python versions
- Use [Python Standalone Builds](https://github.com/indygreg/python-build-standalone)
- Rye replace `python` command to auto use the specified version of `.python-version`
- Rye does not have `pip` command
- Rye uses `uv` to manage dependencies
- Support standard `pyproject.toml`
- Written in Rust

Set Python version of project

```sh
# rye pin <version>
rye pin 3.10
```

Install package dependencies of `pyproject.toml`

```sh
rye sync
```

## Poetry

[Poetry](https://python-poetry.org/)

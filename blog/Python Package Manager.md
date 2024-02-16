---
date: 2024-02-16
tags: [Python]
---

# Python Package Manager

Python 的 Deployment 真的很難，做成越來越多的工具想解決這個問題，Rye 的 [Doc](https://rye-up.com/philosophy/) 有詳細說明 Python 的 Package Management / Version / Resolver 問題

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

## Rye

[Rye](https://rye-up.com/)

- Personal recommended if `pnpm` liked cache is not need
- Built by the creator of the Flask
- Rye can manager multiple versions of Python
- Rye use [Python Standalone Builds](https://github.com/indygreg/python-build-standalone)
- Rye replace `python` command to auto use the specified version of `.python-version`
- Rye does not have `pip` command
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

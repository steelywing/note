---
date: 2024-02-16
tags: [Python, PDM]
---

# Install PyTorch CUDA via PDM

<!--truncate-->

```sh
pdm init
```

Add this to `pyproject.toml`

```toml
[[tool.pdm.source]]
name = "torch"
url = "https://download.pytorch.org/whl/cu121"
include_packages = ["torch", "torchvision", "torchaudio"]
exclude_packages = ["*"]
```

```sh
pdm add torch torchvision torchaudio
```

```sh
# -v: verbose
pdm install -v
```

:::note

PDM think CPU version and CUDA version are same package, if CPU version is installed, install CUDA version in another project will only install the CPU version

To remove the CPU cache package, remove the `torch` directory under PDM cache directory, reinstall the package does not work

:::

Show PDM cache directory

```sh
pdm config cache_dir
```

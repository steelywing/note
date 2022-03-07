# ffmpeg

| Option | Description |
|-|-|
| `-encoders` | show available encoders |
| `-h encoder=<encoder>` | show help about the `<encoder>` |
| `-h decoder=<decoder>` | show help about the `<decoder>` |
| `-hide_banner` | hide banner |

## Input

- Option before `-i`

| Option | Description |
|-|-|
| `-vsync 0` | prevent duplicate and extra frames (fix sync issue?) |
| `-i <URL>` | Input stream |

## Output

- Option before `<output URL>`

| Option | Description |
|-|-|
| `-c:a <codec>` | Select audio encoder |
| `-c:v <codec>` | Select video encoder |
| `-c <codec>` | Select encoder |

### Codec

- `copy`

## Bit Rate

### CBR

Constant Bit Rate

### VBR

Variable Bit Rate

### CRF

Constant Rate Factor

> [Ref](https://slhck.info/video/2017/02/24/crf-guide.html)

- Good for offline video
- Recommended CRF ≈ 20 ~ 30

## AVC

Advanced Video Coding
- H.264

## HEVC

High Efficiency Video Coding
- H.265

## Video Encoder

### `libx264`

Software H.264

### `h264_nvenc`

NVIDIA NVENC H.264 encoder

### `libx265`

Software H.265

| Option | Description |
|-|-|
| `-crf <CRF>` | Constant Rate Factor |

### `hevc_nvenc`

NVIDIA NVENC HEVC encoder

- `-preset {slow|medium|fast|p1|...|p7}`
    - `p1` fastest
    - `p7` slowest

## Hardware accelerator

> [Ref](https://developer.nvidia.com/blog/nvidia-ffmpeg-transcoding-guide/)

| Option | Description |
|-|-|
| `-hwaccel cuda` | chooses appropriate hw accelerator |
| `-hwaccel_output_format cuda` | keeps the decoded frames in GPU memory |

## Pixel format

> [Ref](https://trac.ffmpeg.org/wiki/Chroma%20Subsampling)

Show pixel format

```sh
ffmpeg -pix_fmts
```

Common format

| Option | Description |
|-|-|
| `-vf format=<format>` | set pixel format |
| `yuv420p` | 8-bit 4:2:0 |
| `yuv420p10le` | 10-bit 4:2:0 |

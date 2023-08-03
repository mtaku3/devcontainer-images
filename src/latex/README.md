# LaTeX

## Summary

*Dev Container for quick start of LaTeX*

| Metadata | Value |  
|----------|-------|
| *Categories* | LaTeX |
| *Image type* | Dockerfile |
| *Published images* | ghcr.io/mtaku3/devcontainer-images/latex |
| *Available image variants* | bookworm |
| *Published image architecture(s)* | x86-64, aarch64/arm64 |
| *Container host OS support* | Linux, macOS, Windows |
| *Container OS* | Debian |
| *Languages, platforms* | LaTeX |

See **[history](history)** for information on the contents of published images.

## Using this image

You can directly reference pre-built versions of `Dockerfile` by using the `image` property in `.devcontainer/devcontainer.json` or updating the `FROM` statement in your own  `Dockerfile` to one of the following. An example `Dockerfile` is included in this repository.

- `ghcr.io/mtaku3/devcontainer-images/latex` (latest Debian GA)
- `ghcr.io/mtaku3/devcontainer-images/latex:bookworm`

Refer to [this guide](https://containers.dev/guide/dockerfile) for more details.

You can specify a version of TeXLive. For example:

- `ghcr.io/mtaku3/devcontainer-images/latex:2023-bookworm`
- `ghcr.io/mtaku3/devcontainer-images/latex:2022-bookworm`
- `ghcr.io/mtaku3/devcontainer-images/latex:2021-bookworm`

See [history](history) for information on the contents of each version.

Alternatively, you can use the contents of `Dockerfile` to fully customize your container's contents or to build it for a container host architecture not supported by the image.

Beyond `git`, this image / `Dockerfile` includes `zsh`, [Oh My Zsh!](https://ohmyz.sh/), a non-root `vscode` user with `sudo` access, and a set of common dependencies for development.

## License

Licensed under the MIT License. See [LICENSE](https://github.com/mtaku3/devcontainer-images/blob/main/LICENSE).
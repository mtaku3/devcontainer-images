# [Choice] Debian version (currently supportiing bookworm only)
ARG VARIANT=bookworm
FROM mcr.microsoft.com/devcontainers/base:${VARIANT}
USER root

ENV TEXDIR="/usr/local/texlive"
ENV TEXUSERDIR="/texlive-user"

ENV PATH ${TEXDIR}/bin/aarch64-linux:${TEXDIR}/bin/x86_64-linux:${PATH}

WORKDIR /tmp/texlive

RUN wget -qO- "ftp://tug.org/historic/systems/texlive/2023/install-tl-unx.tar.gz" | tar xz --strip-components=1 && \
    TEXLIVE_INSTALL_NO_CONTEXT_CACHE=1 \
    TEXLIVE_INSTALL_NO_WELCOME=1  \
    ./install-tl --no-interaction \
    --texdir ${TEXDIR} \
    --texuserdir ${TEXUSERDIR} \
    && cd /tmp \
    && rm -rf /tmp/texlive ${TEXDIR}/*.log

RUN tlmgr update --self --all \
    && tlmgr install latexmk latexindent chktex \
    && tlmgr update --all


ARG USERNAME=vscode
WORKDIR /workspace

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

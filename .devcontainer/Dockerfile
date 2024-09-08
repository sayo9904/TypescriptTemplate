FROM node:20-slim

ENV TZ=Asia/Tokyo

ENV LANG=ja_JP.UTF-8

RUN apt update -y \
    && apt upgrade -y \
    && apt install -y sudo \
    && apt install -y git

RUN usermod -aG sudo node \
    && echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER node
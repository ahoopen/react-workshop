FROM node:7.7.2

ENV http_proxy=http://newproxy.ah.nl:8080
ENV https_proxy=http://newproxy.ah.nl:8080
ENV no_proxy=localhost,127.0.0.1,localaddress,.ecom.ahold.nl

# Install yarn package manager and add to PATH for sh
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
ENV PATH=/root/.yarn/bin:$PATH

# Copy package.json
COPY package.json /usr/app/package.json

WORKDIR /usr/app

# Install dependencies
RUN yarn install

# Copy source
COPY . /usr/app

VOLUME /usr/app/node_modules

CMD yarn run start

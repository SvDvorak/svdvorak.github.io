FROM starefossen/github-pages

RUN apk update && apk add alpine-sdk
COPY Gemfile /usr/src/app/Gemfile
# This line fixes a bundling error, see https://github.com/ffi/ffi/issues/1105
RUN bundle lock --add-platform x86_64-linux-musl
RUN bundle
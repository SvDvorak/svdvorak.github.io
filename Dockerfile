FROM starefossen/github-pages

RUN apk update && apk add alpine-sdk
COPY Gemfile /usr/src/app/Gemfile
RUN bundle
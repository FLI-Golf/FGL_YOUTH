# FGL_YOUTH PocketBase Dockerfile for Railway
# Railway will build this Dockerfile from the repo root.

FROM alpine:3.20

ARG PB_VERSION=0.23.12

RUN apk add --no-cache ca-certificates unzip wget \
  && wget -O /tmp/pocketbase.zip "https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip" \
  && unzip /tmp/pocketbase.zip -d /usr/local/bin/ \
  && chmod +x /usr/local/bin/pocketbase \
  && rm /tmp/pocketbase.zip

WORKDIR /pb

COPY backend/pb_migrations ./pb_migrations
COPY backend/pb_hooks ./pb_hooks

# Railway sets PORT automatically. PocketBase must bind to 0.0.0.0.
CMD sh -c 'pocketbase serve --http=0.0.0.0:${PORT:-8090} --dir=/pb/pb_data'

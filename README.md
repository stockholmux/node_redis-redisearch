# RediSearch Module plugin for node_redis

This package allows [node_redis](https://github.com/NodeRedis/node_redis) (2.8+) to interface with the Redis module [RediSearch](http://redisearch.io/).

To use this module, you will need Redis 4.0 or higher and the redisearch module installed.

## Usage

```
var
   redis       = require('redis'),
   redisearch  = require('redis-redisearch');

redisearch(redis);
```

The RediSearch commands will be mapped to javascript-friendly names (`ft.create` becomes `client.ft_create`).

function addRediSearchModule(redis) {
  redis.addCommand('ft.create');
  redis.addCommand('ft.add');
  redis.addCommand('ft.addhash');
  redis.addCommand('ft.info');
  redis.addCommand('ft.search');
  redis.addCommand('ft.explain');
  redis.addCommand('ft.del');
  redis.addCommand('ft.drop');
  redis.addCommand('ft.optimize');
  redis.addCommand('ft.suggadd');
  redis.addCommand('ft.sugget');
  redis.addCommand('ft.sugdel');
  redis.addCommand('ft.suglen');
  redis.addCommand('ft.get');
  redis.addCommand('ft.mget');
}
module.exports = addRediSearchModule;
import { Router } from './core/Router';
import playlist from './repository/playlist';

new Router().route('/playlist', async (param) => {
  const playlistId = param.get('list');
  if (playlistId === null) {
    throw new Error('Playlist id not found');
  }

  await playlist.add(playlistId);
  console.log(await playlist.list());
});

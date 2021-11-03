import { collection, doc, setDoc, getDocs } from 'firebase/firestore';
import { firestore } from '../core/firebase';
import { Playlist } from '../types';

export default {
  list: async () => {
    const results = await getDocs(collection(firestore, 'playlists'));

    results.forEach((playlist) => {
      console.log(playlist.id, ' => ', playlist.data());
    });
  },

  add: async (playlistId: Playlist['id']) => {
    await setDoc(doc(firestore, 'playlists', playlistId), { movies: [] });
  },
};

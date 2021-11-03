import { collection, addDoc, doc } from 'firebase/firestore';
import { firestore } from '../core/firebase';
import { Playlist, Movie } from '../types';

export default {
  add: async (playlistId: Playlist['id'], movies: Movie[]) => {
    const ref = doc(firestore, 'playlists', playlistId);
  },
};

class SpotifyAPI
  def playlist_search(keyword)
    RSpotify.authenticate(ENV['CLIENT_ID'], ENV['CLIENT_SECRET'])

    playlists = RSpotify::Playlist.search(keyword)

    single_playlist = playlists.sample
    { playlist_id: single_playlist.id, user_id: single_playlist.owner.id }
    # { playlist_id: playlists.first.id, user_id: playlists.first.owner.id }
  end
end

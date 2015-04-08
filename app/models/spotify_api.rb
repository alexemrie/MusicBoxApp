class SpotifyAPI
  def playlist_search(keyword)
    RSpotify.authenticate("082a01d09fde4c4491f2f8b4ebb22282", "11a3fb08b7104cdf885be59a07b02a48")

    playlists = RSpotify::Playlist.search(keyword)
    { playlist_id: playlists.first.id, user_id: playlists.first.owner.id }
  end
end

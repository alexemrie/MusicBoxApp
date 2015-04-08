class WelcomeController < ApplicationController

  def index
  end

  def search
    render json: SpotifyAPI.new.playlist_search(params[:genre])
    # render json: SpotifyAPI.new.playlist_search(params[:genre]), status: 500
  end
end

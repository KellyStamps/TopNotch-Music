class Api::V1::AlbumsController < ApplicationController
  before_action :current_user

  def index
    albums = Album.all
    artists = Artist.all
    render json: {albums: albums, artists: artists}
  end

end

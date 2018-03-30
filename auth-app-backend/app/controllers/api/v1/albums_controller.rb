class Api::V1::AlbumsController < ApplicationController
  # before_action :authenticate_user

  def index
    albums = Album.all
    render json: {albums: albums}
  end

end

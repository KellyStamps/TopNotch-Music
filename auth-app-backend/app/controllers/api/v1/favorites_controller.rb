class Api::V1::FavoritesController < ApplicationController

  def create
    new_fave = Favorite.new(user_id: 1, album_name: params[:album_name], artist_name: params[:artist_name], artist_url: params[:artist_url], album_img: params[:album_img])

    if new_fave.save
      render json: {new_fave: new_fave}
    else
      render json: {error: "Uh oh oh nos"}
    end

  end

end

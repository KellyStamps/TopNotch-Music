class Api::V1::AuthController < ApplicationController
  before_action :authorize_user!, only: [:show]

  def show
    render json: {
      id: find_current_user.id,
      username: find_current_user.username,
      favorites: find_current_user.favorites
    }
  end

  def create
    user = User.find_by(username: params[:username])
    if user.present? && user.authenticate(params[:password])
      created_jwt = issue_token({id: user.id})
      render json: {username: user.username, id: user.id, jwt: created_jwt}
    else
      render json: {
        error: 'Username or password incorrect'
      }, status: 404
    end
  end


end
